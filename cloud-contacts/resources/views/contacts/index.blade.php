@extends('layouts.master')

@section('content')
<div class="content-wrapper">
    <div class="content">
      <div class="card">
        <div class="card-header bg-light">
            <h4 class="card-title">Contact Import (.xlsx)</h4>
        </div>
        <form name="first_import" action="{{ url('contacts-import') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <input type="file" name="import_file" class="form-control-uniform" data-fouc>
                    </div>
                    <button class="btn btn-primary mr-2">Import File</button> <a href="{{url('excel/contacts.xlsx')}}" class="btn btn-outline-primary">Download Upload Format</a>
                </div>
                @if(isset($message->error))
                    <p class="text-danger">{{$message->error}}</p>
                @endif
                @if(isset($message->success))
                    <p class="text-success">{{$message->success}}</p>
                @endif
            </div>
        </form>
      </div>
      <div class="card">
        <div class="col-lg-12">
          <p class="pull-right mt-2">
            <a href="{{ route('contacts.create') }}" class="btn btn-primary">Create</a>
            <a href="{{ url('contacts-export') }}" class="btn btn-primary">Export</a>
          </p>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="dealer-table">
              <table class="table" id="table">
                    <thead>
                        <tr>
                          <th width="1%" nowrap="">Sr No</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>Nick Name</th>
                          <th>Company Name</th>
                          <th>Status</th>
                          <th width="1%" nowrap="">Action</th>                        
                        </tr>
                    </thead>
              </table>
            </div>
          </div>
        </div>  
              
      </div>
    </div>
</div>
@endsection
@section('scripts')
<script>
$(function() {
      $('#table').DataTable({
      processing: true,
      serverSide: true,
       "autoWidth": false,
      ajax: '{{ route('contacts.index') }}',
      language: {
        search: '<span>Filter:</span> _INPUT_',
        searchPlaceholder: 'Type to Search...',
        lengthMenu: '<span>Show:</span> _MENU_',
     },
      columns: [
              {data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false},            
              { data: 'first_name', name: 'first_name' },
              { data: 'last_name', name: 'last_name' },
              { data: 'email', name: 'email' },
              { data: 'phone', name: 'phone' },
              { data: 'address', name: 'address' },
              { data: 'nick_name', name: 'nick_name' },
              { data: 'company', name: 'company' },
              { data: 'status', name: 'status' },
              { data: 'action', name: 'action', orderable: false, searchable: false}
          ]
  });
  /* confirmation message for delete*/   
    $("#table").on('click', ' #delete', function(){
      if (!confirm("Do you want to delete?")){
        return false;
      }
    });
});
</script>
@endsection