(function(e,t){
	function n(){
		var n = r.getBoundingClientReact().width;
		t = t || 540;
		n > t && (n = t);
		var i = 100 * n / e;
		l.innerHTML = 'html{font-size:' + i + 'px;}'
	}
	var i, d = document,
		o = window,
		r = d.documentElement,
		l = d.createElement('style');
		if(r.firstElementChild){
			r.firstElementChild.appendChild(l);
		}else{
			var a = d.createElement('div');
			a.appendChild(l),
			d.write(a.innerHTML),
			a = null
		}
		n(),
		o.addEventListener('resize',function(){
			clearTimeout(i),
			i = setTimeout(n,300)
		},!1),
		o.addEventListener('pageshow',function(e){
			e.persisted && (clearTimeout(i), i = setTimeout(n,300))
		},!1),
		'complete' === d.readyState 
					? d.body.style.fontSize = '0.32rem' 
					: d.addEventListener('DOMContentLoaded',function(e){
						d.body.style.fontSize = '0.32rem'
					},!1)
})(750,1500);