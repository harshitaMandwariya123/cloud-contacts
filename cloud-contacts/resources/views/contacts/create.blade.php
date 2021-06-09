@extends('layouts.master')

@section('content')

    <div class="content-wrapper">
        <div class="content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="">
                        <h3 class="mb-3 font-weight-semibold site_heading">
                        @if(isset($contact))
                            Update Contact
                        @else
                            Add Contact
                        @endif   
                            <span id="case_type_title"></span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row mb-4">
                
                    @if(isset($contact))
                        {{ Form::model($contact, ['route' => ['contacts.update', $contact->id], 'method' => 'patch', 'data-parsley-validate']) }}
                    @else
                        {!! Form::open(['method' => 'POST', 'route' => ['contacts.store'], 'data-parsley-validate']) !!}
                    @endif
                    <div class="col-lg-12 mt-5 ml-3">
                        <div class="row mr-5">
                            <div class="col-md-8">
                                {!! Form::label('last_name', 'First Name *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('first_name', old('first_name'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>20]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('first_name'))
                                        <p class="help-block">
                                            {{ $errors->first('first_name') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('last_name', 'Last Name *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('last_name', old('last_name'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>20]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('last_name'))
                                        <p class="help-block">
                                            {{ $errors->first('last_name') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('email', 'Email *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('email', old('email'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>50]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('email'))
                                        <p class="help-block text-danger">
                                            {{ $errors->first('email') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('phone', 'Mobile No *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('phone', old('phone'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>15]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('phone'))
                                        <p class="help-block text-danger">
                                            {{ $errors->first('phone') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('address', 'Address *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('address', old('address'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>200]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('address'))
                                        <p class="help-block">
                                            {{ $errors->first('address') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('nick_name', 'Nick Name *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('nick_name', old('nick_name'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>20]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('nick_name'))
                                        <p class="help-block">
                                            {{ $errors->first('nick_name') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                                {!! Form::label('company', 'Company Name *', ['class' => 'control-label']) !!}
                                <div class="form-group">
                                    {!! Form::text('company', old('company'), ['class' => 'form-control', 'required' => '','data-parsley-maxlength'=>50]) !!}
                                    <p class="help-block"></p>
                                    @if($errors->has('company'))
                                        <p class="help-block">
                                            {{ $errors->first('company') }}
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8">
                            <div class="form-group">
                            <label>Status *</label>
                                <select name="status" id="status" class="form-control" >
                                    <option value="">-- Select --</option>
                                    <option value="1" @if(!empty($contact->status) && $contact->status=="1") selected="selected" @endif>Active</option>
                                    <option value="0" @if(isset($contact->status) && $contact->status=="0") selected="selected" @endif>Inactive</option>
                                </select></div>
                            </div>
                            <div class="col-md-12">
                            @if(isset($contact))
                                {!! Form::submit('Update', ['class' => 'btn btn-primary']) !!}
                                <a href="{{ route('contacts.index')}}">
                                    {!! Form::button(trans('Cancel'), ['class' => 'btn btn-primary']) !!}
                                </a>
                            @else
                                {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
                                <a href="{{ route('contacts.index')}}">
                                    {!! Form::button(trans('Cancel'), ['class' => 'btn btn-primary']) !!}
                                </a>
                            @endif
                            </div>
                        </div>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@stop
