<?php

namespace App\Imports;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;
use Maatwebsite\Excel\Concerns\ToModel;

class ContactsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $data = [
            'user_id'   => Auth::id(),
            'first_name'     => $row[0],
            'last_name'     => $row[1],
            'email'    => $row[2], 
            'phone'    => $row[3], 
            'address'    => $row[4], 
            'nick_name'    => $row[5], 
            'company'    => $row[6], 
            'status'    =>$row[7]
        ];

        Contact::create($data);
        return true;

    }
}
