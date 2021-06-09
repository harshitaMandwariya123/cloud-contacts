<!-- Admin Case Management Header -->
<div class="d-xs-none">
    <div class="navbar navbar-expand-md navbar-dark">
        <!--Side Navigation Hide Show End-->
        <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="navbar-nav ml-md-auto">
                @if(!empty(Auth::user()))
                <li class="nav-item dropdown dropdown-user">
                    <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown"><span>{{ Auth::user()->name }}</span></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="icon-switch2"></i> Logout</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </div>
                </li>
                @endif
            </ul>
        </div>
    </div>
</div>
<!-- /main navbar -->