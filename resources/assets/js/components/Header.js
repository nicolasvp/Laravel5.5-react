import React, { Component } from 'react';

class Header extends Component {
	render(){
		return(
			<nav className="navbar navbar-default navbar-static-top m-b-0">
				<div className="navbar-header">
					<a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu"></i></a>
					<div className="top-left-part">
						<a className="logo" href="index.html">
							<b><img src="#" alt="home" /></b>
							<span className="hidden-xs"><img src="#" alt="home" /></span>
						</a>
					</div>
					<ul className="nav navbar-top-links navbar-left hidden-xs">
						<li><a href="javascript:void(0)" className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu"></i></a></li>
						<li>
							<form role="search" className="app-search hidden-xs">
								<input type="text" placeholder="Search..." className="form-control"></input>
									<a href=""><i className="fa fa-search"></i></a>
							</form>
						</li>
					</ul>
					<ul className="nav navbar-top-links navbar-right pull-right">
						<li className="dropdown">
							<a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#">
								<i className="icon-envelope"></i>
								<div className="notify"><span className="heartbit"></span><span className="point"></span></div>
							</a>
							<ul className="dropdown-menu mailbox animated bounceInDown">
								<li>
									<div className="drop-title">You have 4 new messages</div>
								</li>
								<li>
									<div className="message-center">
										<a href="#">
											<div className="user-img"> <img src="#" alt="user" className="img-circle"></img> <span className="profile-status online pull-right"></span> </div>
											<div className="mail-contnet">
												<h5>Pavan kumar</h5>
												<span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span>
											</div>
										</a>
									</div>
								</li>
								<li>
									<a className="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i className="fa fa-angle-right"></i> </a>
								</li>
							</ul>
						</li>
						<li className="dropdown">
							<a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#">
								<i className="icon-note"></i>
								<div className="notify"><span className="heartbit"></span><span className="point"></span></div>
							</a>
							<ul className="dropdown-menu dropdown-tasks animated slideInUp">
								<li>
									<a href="javascript:void(0)">
										<div>
											<p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p>
											<div className="progress progress-striped active">
												<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}> <span className="sr-only">40% Complete (success)</span> </div>
											</div>
										</div>
									</a>
								</li>
								<li className="divider"></li>
								<li>
									<a className="text-center" href="#"> <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i> </a>
								</li>
							</ul>
						</li>
						<li className="dropdown">
							<a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="#" alt="user-img" width="36" className="img-circle"></img><b className="hidden-xs">Steave</b> </a>
							<ul className="dropdown-menu dropdown-user animated flipInY">
								<li><a href="#"><i className="ti-user"></i> My Profile</a></li>
								<li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
								<li><a href="#"><i className="ti-email"></i> Inbox</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
							</ul>
						</li>
						<li className="right-side-toggle"> <a className="waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings"></i></a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;