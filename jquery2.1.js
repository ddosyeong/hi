/*! jQuery Color v2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
(function(a,b){
  function m(a,b,c){
    var d=h[b.type]||{};
    if(a==null) return c||!b.def ? null : b.def;
    a = d.floor ? ~~a : parseFloat(a);
    if(isNaN(a)) return b.def;
    if(d.mod) return (a + d.mod) % d.mod;
    if(a < 0) return 0;
    if(d.max < a) return d.max;
    return a;
  }
  function n(b){
    var c=f(), d=c._rgba=[];
    b=b.toLowerCase();
    l(e,function(a,e){
      var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";
      if(i){
        f=c[j](i);
        c[g[j].cache]=f[g[j].cache];
        d=c._rgba=f._rgba;
        return false;
      }
    });
    if(d.length){
      if(d.join() === "0,0,0,0") a.extend(d,k.transparent);
      return c;
    }
    return k[b];
  }
  function o(a,b,c){
    c=(c+1)%1;
    if(c*6<1) return a+(b-a)*c*6;
    if(c*2<1) return b;
    if(c*3<2) return a+(b-a)*(2/3-c)*6;
    return a;
  }

  var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      d=/^([\-+])=\s*(\d+\.?\d*)/,
      e=[
        {
          re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse:function(a){return [a[1],a[2],a[3],a[4]];}
        },
        {
          re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse:function(a){return [a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]];}
        },
        {
          re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse:function(a){return [parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)];}
        },
        {
          re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse:function(a){return [parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];}
        },
        {
          re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space:"hsla",
          parse:function(a){return [a[1],a[2]/100,a[3]/100,a[4]];}
        }
      ],
      f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e);},
      g={
        rgba:{
          props:{
            red:{idx:0,type:"byte"},
            green:{idx:1,type:"byte"},
            blue:{idx:2,type:"byte"}
          }
        },
        hsla:{
          props:{
            hue:{idx:0,type:"degrees"},
            saturation:{idx:1,type:"percent"},
            lightness:{idx:2,type:"percent"}
          }
        }
      },
      h={
        "byte":{floor:true,max:255},
        percent:{max:1},
        degre
