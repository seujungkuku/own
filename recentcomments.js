var m_rc = true;
var n_rc = true;
var o_rc = 120;
var d_rc = '';
function showrecentcomments(e){
 document.write('<ul class="list-group text-muted">');		  
 for(var r=0;r<a_rc;r++){
  var t,n=e.feed.entry[r];
  if(r==e.feed.entry.length)
   break;
   if(n.link.length < 3){ 
    var s= '<i class="text-danger"><del>Comment deleted</del></i>';
	d_rc = 'text-danger';
  }
   else {
   d_rc = '';
   for(var i=0;i<n.link.length;i++)
    if("alternate"==n.link[i].rel){
     t=n.link[i].href;
    break}
	t=t.replace("#","#");
	var a=t.split("#");
	a=a[0];
	var c=a.split("/");
	c=c[5],c=c.split(".html"),c=c[0];
	var s=c.replace(/-/g," ");
	s=s.link(a);
   }
	var o=n.published.$t,l=(o.substring(0,4),o.substring(5,7)),thn=o.substring(0,4),u=o.substring(8,10),m=new Array;
	if(m[1]="Jan",m[2]="Feb",m[3]="Mar",m[4]="Apr",m[5]="May",m[6]="Jun",m[7]="Jul",m[8]="Aug",m[9]="Sep",m[10]="Oct",m[11]="Nov",m[12]="Dec","content"in n)
	var d=n.content.$t;
	 else 
	  if("summary"in n)var d=n.summary.$t;
		else var d="";var v=/<\S[^>]*>/g;
	 
	if(d=d.replace(v,""),document.write('<li class="list-group-item text-justify"><ul class="media-list">'),document.write("<li class='media'><div class='media-left'><span class='icon jqh-calendar'></span></div><div class='media-body'>"+u+" "+m[parseInt(l,10)]+" "+thn),1==m_rc&&document.write('&nbsp;&nbsp;&nbsp;<span class="icon jqh-user"></span>&nbsp;&nbsp;<a href="'+t+'">'+n.author[0].name.$t+'</a></div></li>'),1==n_rc&&document.write("<li class='media'><div class='media-left'><span class='icon jqh-list-ul'></span></div><div class='media-body'>"+s+"</div></li>"),0==o_rc)
	 document.write("</ul></li>");
	else 
	 if(document.write("<li class='media'><div class='media-left'><span class='icon jqh-comment-o'></span></div>"),d.length<o_rc)
	  document.write("<div class='media-body'><i class='"+d_rc+"'>"),document.write(d),document.write("</i></div></li></ul></li>");
	 else{
	  document.write("<div class='media-body'><i class='"+d_rc+"'>"),d=d.substring(0,o_rc);
	  var w=d.lastIndexOf(" ");
	  d=d.substring(0,w),document.write(d+"&hellip;</i></div></li></ul></li>"),document.write("")
	 }
 } /* end looping */
 document.write('</ul>');
}
var modehp = home_page_rc.substring(home_page_rc.length - 4, home_page_rc.length);
if(modehp == '?m=1' || modehp == '?m=0')
  home_page_rc = home_page_rc.substring(0, home_page_rc.length-modehp.length);