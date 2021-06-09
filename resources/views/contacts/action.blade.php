<div class="text-center">
    <div class="list-icons">
        <div class="dropdown">
            <a href="#" class="list-icons-item" data-toggle="dropdown">
                <i class="icon-menu9"></i>
            </a> 
            <div class="dropdown-menu dropdown-menu-right">
                <a href={{ url('contacts/' . $contacts->id . '/edit') }} class="dropdown-item"><i class="icon-pencil3"></i>  Edit</a>
                <a href={{ url('contacts/' . $contacts->id . '/delete') }} id="delete" class="dropdown-item"><i class="icon-trash"></i> Delete</a> 
            </div> 
        </div>
    </div> 
</div>