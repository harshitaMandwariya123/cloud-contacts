@extends('layouts.master')

@section('content')

        <!-- Page content -->
        <div class="page-content pt-0">
          
            <div class="content-wrapper">
                <div class="content d-flex justify-content-center align-items-center">
                    <!-- Login card -->
                    <form class="login-form" method="POST" action="{{ route('login') }}" id="" data-parsley-validate="">
                        <input type="hidden" name="_token" value="{{csrf_token()}}">
                        <div class="card mb-0 login_card">
                            <div class="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="eicher_login">
                                            <div class="eicher_box-2">
                                                <img src="{{url('images/contact.png')}}" alt="">
                                            </div>
                                            <div class="eicher_box-1">
                                                <div class="">
                                                    <div class="card-body">
                                                        <div class="form-width" style="">
                                                            <div class="text-center mb-3">
                                                                <h2 class="mb-0 ">Login</h5>
                                                            </div>
                                                            <div class="form-group form-group-feedback form-group-feedback-left {{ $errors->has('email') ? ' has-error' : '' }}">
                                                                <input type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus data-parsley-required-message="Please enter email" placeholder="email" />
                                                                <div class="form-control-feedback">
                                                                    <i class="icon-user text-muted"></i>
                                                                </div>
                                                                @if ($errors->has('email'))
                                                                    <span class="help-block">
                                                                    <strong>{{ $errors->first('email') }}</strong>
                                                                </span>
                                                                @endif
                                                            </div>
                                                            <div class="form-group form-group-feedback form-group-feedback-left {{ $errors->has('password') ? ' has-error' : '' }}">
                                                                <input id="password" type="password" class="form-control" name="password" required data-parsley-required-message="{{ 'Please enter password' }}" placeholder="Password" />
                                                                <div class="form-control-feedback">
                                                                    <i class="icon-lock2 text-muted"></i>
                                                                </div>
                                                                @if ($errors->has('password'))
                                                                    <span class="help-block">
                                                                    <strong>{{ $errors->first('password') }}</strong>
                                                                </span>
                                                                @endif
                                                            </div>
                                                            <div class="form-group mb-1">
                                                                <button type="submit" class="btn btn-primary btn-block">Sign In<i class="icon-circle-right2 ml-2"></i></button>
                                                            </div>
                                                            <div class="col-md-6">
                                                                    <a  class="btn btn-link pl-0" href="/register">Register</a>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </form>
                    <!-- /login card -->
                </div>
            </div>
        
        </div>
        <!-- /page content -->
@endsection