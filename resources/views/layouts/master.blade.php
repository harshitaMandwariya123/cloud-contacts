<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Contacts</title>
    <script>
        var BASE_URL = '{{url("/")}}';
    </script>
    <!-- Global stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700" rel="stylesheet">
    <link href="{{url('css/icomoon/styles.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/fontawesome/styles.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/bootstrap_limitless.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/layout.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/components.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/colors.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/vecv_fonts/style.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/site.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('css/toastr.min.css')}}" rel="stylesheet">
    <link href="{{url('css/easy-autocomplete.min.css')}}" rel="stylesheet">

    <!-- VendorSupportCase -->
    <link rel="stylesheet" type="text/css" href="http://weareoutman.github.io/clockpicker/dist/bootstrap-clockpicker.min.css">
    <!-- EndVendorSupportCase -->
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="{{url('js/jquery.min.js')}}"></script>
    <script src="{{url('js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{url('js/blockui.min.js')}}"></script>
    <!-- /core JS files -->

    <!-- Theme JS files -->
    <script src="{{url('js/app_theme.js')}}"></script>
    <script src="{{url('js/custom.js')}}"></script>
    <script src="{{url('js/plugins/forms/selects/select2.min.js')}}"></script>
    <script src="{{url('/js/plugins/forms/styling/uniform.min.js')}}"></script>
    <script src="{{url('js/plugins/d3/d3.min.js')}}"></script>
    <script src="{{url('js/plugins/c3/c3.min.js')}}"></script>
    <script src="{{url('js/plugins/jquery_ui/widgets.min.js')}}"></script>
    <script src="{{url('js/plugins/forms/selects/bootstrap_multiselect.js')}}"></script>

    <script src="{{url('js/plugins/gauge/gauge.min.js')}}"></script>
    <script src="{{url('js/tileJs.js')}}"></script>

    <!-- /theme JS files -->
    <!-- Demo JS Files-->
    <script src="{{url('js/demo_js/form_inputs.js')}}"></script>
    <script src="{{url('js/demo_js/c3_lines_areas.js')}}"></script>
    <script src="{{url('js/demo_js/c3_bars_pies.js')}}"></script>
    <script src="{{url('js/demo_js/jqueryui_forms.js')}}"></script>
    <script src="{{url('js/demo_js/timelines.js')}}"></script>
    <script src="{{url('js/demo_js/form_select2.js')}}"></script>
    <script src="{{url('js/demo_js/form_multiselect.js')}}"></script>
    <script src="{{url('js/demo_js/components_collapsible.js')}}"></script>
    <script src="{{url('js/toastr.min.js')}}"></script>
    <script src="{{url('js/parsley.js')}}"></script>
    <script src="{{url('js/jquery.easy-autocomplete.min.js')}}"></script>

    <!-- VendorSupportCase -->
    <script src="http://weareoutman.github.io/clockpicker/dist/bootstrap-clockpicker.min.js"></script>
    <!-- EndVendorSupportCase -->

    <!-- /Demo JS Files-->
    <!-- Main Stylesheet File -->
</head>

<body class="">
        @include('layouts.header')
        <!-- Main Content -->
        @yield('content')
        <!-- /Main Content -->
    </div>
    <div id="overlay" style="display:none;">
        <div class="spinner"></div>
        <br />
        Loading...
    </div>
    {{--@yield('scripts')--}}
    @if(Route::is('case.edit'))
    <!-- livezilla.net PLACE SOMEWHERE IN BODY -->
    <script type="text/javascript" id="lzdefsc" src="//eicheruptime.vecv.net/chat/script.php?id=lzdefsc" defer></script><!-- livezilla.net PLACE SOMEWHERE IN BODY -->
    @endif
    <script src="{{ url('js/app.js') }}" type="text/js"></script>
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    @yield('scripts')
    <script type="text/javascript">
        $(document).ready(function() {
            toastr.options = {
                "timeOut": 10000
            }

            @if(Session::has('success'))
            var msg = "{{ Session::get('success') }}";
            toastr.success(msg, 'Success');
            @endif

            @if(Session::has('failure'))
            var msg = "{{ Session::get('failure') }}";
            toastr.error(msg, 'Failed');
            @endif

            @if(Session::has('errors'))
            var validationError = '{{ config('
            app.messages.form_errors ')  }}';
            toastr.error(validationError, 'Failed');
            @endif

            $.datepicker.setDefaults({
                dateFormat: 'dd-mm-yy'
            });
        });
    </script>
</body>
</html>