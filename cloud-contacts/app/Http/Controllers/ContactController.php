<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Exception;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Auth;
use Excel;
use DB;
use App\Exports\ContactsExport;
use App\Imports\ContactsImport;

class ContactController extends Controller
{
    /**
     * Display a listing of the contact.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {

            if ($request->ajax()) {
                //Get Contact data for Contact listing view.
                $contacts = Contact::where("user_id", Auth::id())->latest()->get();
                return DataTables::of($contacts)

                    ->addIndexColumn()
                    
                    ->editColumn('status', function($contacts) {
                        if($contacts->status == 1) {
                            return "Active";
                        } else {
                            return "Inactive";
                        }
                    })

                    //Add action column for edit and delete
                    ->addColumn('action', function ($contacts) {
                        //  render view of actions 
                        $returnHTML = view('contacts.action', compact('contacts'))->render();
                        return $returnHTML;
                    })

                    ->rawColumns(['action'])
                    ->make(true);
            }

            //Success or error message for import file.
            $message= array ();
            if(session()->get('data')){
                $message= session()->get('data');
            }

            //Index view of contacts
            return view('contacts.index',['message'=>$message]);

        } catch (Exception $e) {
            return redirect()->route('contacts.index')->with('failure', $e->getMessage());
        };

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        try {
            return view('contacts.create');
        } catch (Exception $e) {
            return redirect()->route('contacts.index')->with('failure', $e->getMessage());
        };
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:contacts,email',
            'phone' => 'required|unique:contacts,phone',
        ]);

        $request->request->add(['user_id' => Auth::id()]);
        $contact = Contact::create($request->all());

        return redirect()->route('contacts.index')->with('success','Contact created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            //Get a particular contact details by id for edit contact.
            $data['contact'] = Contact::findOrFail($id);
            //Edit view of contact
            return view('contacts.create', $data);

        } catch (ModelNotFoundException $e) {
            return redirect()->route('contacts.index')->with('failure', $e->getMessage());
        } catch (Exception $e) {
            return redirect()->route('contacts.create')->with('failure', $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $contactId = $contact->id;
        $request->validate([
            'email' => 'required|unique:contacts,email,' .$contactId,
            'phone' => 'required|unique:contacts,phone,' .$contactId,
        ]);

        $contact->update($request->all());

        return redirect()->route('contacts.index')->with('success','Contact updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        try {
            //Get a particular contact details by id.
            $contact = Contact::findOrFail($id);
            //Soft delete contact from database.
            if($contact->delete()) {
                return redirect()->route('contacts.index')->with('success', 'Contact deleted successfully.');
            } else {
                return redirect()->route('contacts.index')->with('failure', 'Some Error in Deleting this Record');  
            }
        } catch (ModelNotFoundException $ex) {
            return redirect()->route('contacts.index')->with('failure', 'Some Error occured');
        } catch (Exception $ex) {
            return redirect()->route('contacts.index')->with('failure', 'Some Error occured');
        }
    }

    
    /**
     * Store all database into a excelsheet.
     * @return \Illuminate\Http\Response
     */
    public function exportContacts()
    {
        return Excel::download(new ContactsExport, 'contacts.xlsx');

    }

    /**
     * Function for Upload Resolution Category data from xlsx file.
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function importContacts(Request $request)
    {
        try {

            if ($request) {
                $insertedRecords = 0;

                if ($request->hasFile('import_file')) {
                    $date = date('YmdHis');
                    $file = $request->file('import_file');
                    $userId = Auth::user()->id;
                    //File size Validate
                    $fileSize = $file->getSize();

                    if ($fileSize > 2097152) {
                        $data = (object) [
                            'error' => 'You can not upload a file more than 2MB.',
                            'data' => array(),
                        ];

                        return redirect()->back()->with('data', $data);

                    }

                    //File Extension Validate
                    $ext = $file->getClientOriginalExtension();                    

                    if ($ext != 'xlsx') {
                        $data = (object) [
                            'error' => 'Invalid file uploaded, please upload valid ".xlsx" file.',
                            'data' => array(),
                        ];

                        return redirect()->back()->with('data', $data);

                    }

                    $fileName = $file->getClientOriginalName();
                    $mimeType = $file->getMimeType();
                    $realPath = $file->getRealPath();
                    $excelData = Excel::load($realPath)->get();  //I also used import() at place of load and tried all possible solutions.

                    if ($excelData->count()) {
                        $storeCounts = 0;
                        $invalidCount = 0;
                        $loopCount = 0;

                        foreach ($excelData as $row) {
                            //Check already exists Contact
                            $checkExist = Contact::where('phone', $row->phone)->where('email', $row->email)->count();

                            if (empty($checkExist)) {
                                $loopCount++;
                                $contacts = new Contact;

                                $contacts->first_name = trim($row->first_name);
                                $contacts->last_name = trim($row->last_name);
                                $contacts->nick_name = trim($row->nick_name);
                                $contacts->company = trim($row->company);
                                $contacts->status = trim($row->status);

                                if (!empty(trim($row->email))) {
                                    $contacts->email = trim($row->email);
                                } else {
                                    return redirect()->back()->with('failure', "Email is required.");
                                }


                                if (!empty(trim($row->phone))) {
                                    $contacts->phone = trim($row->phone);
                                } else {
                                    return redirect()->back()->with('failure', "Phone is required.");
                                }

                                if ($contacts->save()) {
                                    $storeCounts++;
                                }else {
                                    $invalidCount++;
                                } 
                            }else {
                                $invalidCount++;
                            }
                        }
                    }

                    $data = (object) [
                        //Validation messages
                        'success' => ($storeCounts != 0) ? $storeCounts . ' Record(s) Updated Sucessfully! ' : '',
                        'error' => ($invalidCount != 0) ? $invalidCount . ' Invalid or Record(s) already exists!' : '',
                        'affectedRows' => $storeCounts,
                    ];

                    return redirect()->back()->with('data', $data);

                }
            }
            //validation for no file selected
            $data = (object) [
                'error' => 'Please Select .xlsx File!',
                'data' => array(),
            ];

            return redirect()->back()->with('data', $data);

        } catch (Exception $e) {
            return redirect()->route('contacts.index')->with('failure', $e->getMessage());
        }
    }
}
