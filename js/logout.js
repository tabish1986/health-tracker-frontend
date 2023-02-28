function terminateSession()
{
	sessionStorage.removeItem('session_userid');
	sessionStorage.removeItem('seession_token');
	sessionStorage.removeItem('seession_name');
	window.location.href='index.html'
}