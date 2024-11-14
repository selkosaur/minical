var rt=Object.defineProperty,ot=(t,e,n)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e,n)=>ot(t,"symbol"!=typeof e?e+"":e,n),et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var st={exports:{}};st.exports=function(){var t=1e3,e=6e4,n=36e5,s="millisecond",i="second",a="minute",r="hour",o="day",h="week",c="month",u="quarter",l="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},M={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,c),a=n-i<0,r=e.clone().add(s+(a?-1:1),c);return+(-(s+(n-i)/(a?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:h,d:o,D:d,h:r,m:a,s:i,ms:s,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",$={};$[D]=m;var g="$isDayjsObject",E=function(t){return t instanceof S||!(!t||!t[g])},w=function t(e,n,s){var i;if(!e)return D;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var r=e.split("-");if(!i&&r.length>1)return t(r[0])}else{var o=e.name;$[o]=e,i=o}return!s&&i&&(D=i),i||!s&&D},b=function(t,e){if(E(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},T=M;T.l=w,T.i=E,T.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return this.$d.toString()!==f},v.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,n){return T.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,s=!!T.u(e)||e,u=T.p(t),f=function(t,e){var i=T.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?i:i.endOf(o)},p=function(t,e){return T.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,m=this.$M,v=this.$D,M="set"+(this.$u?"UTC":"");switch(u){case l:return s?f(1,0):f(31,11);case c:return s?f(1,m):f(0,m+1);case h:var D=this.$locale().weekStart||0,$=(y<D?y+7:y)-D;return f(s?v-$:v+(6-$),m);case o:case d:return p(M+"Hours",0);case r:return p(M+"Minutes",1);case a:return p(M+"Seconds",2);case i:return p(M+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,h=T.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[l]=u+"FullYear",n[r]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[s]=u+"Milliseconds",n)[h],p=h===o?this.$D+(e-this.$W):e;if(h===c||h===l){var y=this.clone().set(d,1);y.$d[f](p),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[T.p(t)]()},v.add=function(s,u){var d,f=this;s=Number(s);var p=T.p(u),y=function(t){var e=b(f);return T.w(e.date(e.date()+Math.round(t*s)),f)};if(p===c)return this.set(c,this.$M+s);if(p===l)return this.set(l,this.$y+s);if(p===o)return y(1);if(p===h)return y(7);var m=(d={},d[a]=e,d[r]=n,d[i]=t,d)[p]||1,v=this.$d.getTime()+s*m;return T.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=T.z(this),a=this.$H,r=this.$m,o=this.$M,h=n.weekdays,c=n.months,u=n.meridiem,l=function(t,n,i,a){return t&&(t[n]||t(e,s))||i[n].slice(0,a)},d=function(t){return T.s(a%12||12,t,"0")},p=u||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(y,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return T.s(e.$y,4,"0");case"M":return o+1;case"MM":return T.s(o+1,2,"0");case"MMM":return l(n.monthsShort,o,c,3);case"MMMM":return l(c,o);case"D":return e.$D;case"DD":return T.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,h,2);case"ddd":return l(n.weekdaysShort,e.$W,h,3);case"dddd":return h[e.$W];case"H":return String(a);case"HH":return T.s(a,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return p(a,r,!0);case"A":return p(a,r,!1);case"m":return String(r);case"mm":return T.s(r,2,"0");case"s":return String(e.$s);case"ss":return T.s(e.$s,2,"0");case"SSS":return T.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,d,f){var p,y=this,m=T.p(d),v=b(s),M=(v.utcOffset()-this.utcOffset())*e,D=this-v,$=function(){return T.m(y,v)};switch(m){case l:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case h:p=(D-M)/6048e5;break;case o:p=(D-M)/864e5;break;case r:p=D/n;break;case a:p=D/e;break;case i:p=D/t;break;default:p=D}return f?p:T.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=w(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=S.prototype;return b.prototype=O,[["$ms",s],["$s",i],["$m",a],["$H",r],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=w,b.isDayjs=E,b.unix=function(t){return b(1e3*t)},b.en=$[D],b.Ls=$,b.p={},b}();var ct=st.exports;const x=nt(ct);var it={exports:({},function(t,e,n){e.prototype.isToday=function(){var t="YYYY-MM-DD",e=n();return this.format(t)===e.format(t)}})},ut=it.exports;const lt=nt(ut);function T(t,e,n){const s=document.createElement(t);"string"==typeof e&&(e={cls:e});const i=e||{},{cls:a,text:r,attr:o,title:h,value:c,placeholder:u,type:l,parent:d,prepend:f,href:p,...y}=i;if(a&&(s.className=Array.isArray(a)?a.join(" "):a),r&&(s.textContent=r),o)for(const[t,e]of Object.entries(o))s.setAttribute(t,e);void 0!==h&&(s.title=h),void 0!==c&&(s instanceof HTMLInputElement||s instanceof HTMLSelectElement||s instanceof HTMLOptionElement)&&(s.value=c),u&&s instanceof HTMLInputElement&&(s.placeholder=u),l&&(s instanceof HTMLInputElement?s.type=l:s instanceof HTMLStyleElement&&s.setAttribute("type",l)),p&&(s instanceof HTMLAnchorElement||s instanceof HTMLLinkElement||s instanceof HTMLBaseElement)&&(s.href=p),d&&(f?d.insertBefore(s,d.firstChild):d.appendChild(s));for(const t in y)if(Object.prototype.hasOwnProperty.call(y,t)&&t.startsWith("on")){const e=t.substring(2),n=y[t];"function"==typeof n&&s.addEventListener(e,n)}return s}function R(t){return t instanceof Date&&!isNaN(t.getTime())}function X(t){const e=new Date(t);return!isNaN(e.getTime())}x.extend(lt);const tt={targetEl:document.body,initMonth:new Date,events:[],theme:null,startOfWeek:0,allowNavigation:!0,displayNavButtons:!0,onDateClick:void 0},ht={monthchange:!0};class ft{constructor(t){m(this,"events",[]),m(this,"options"),m(this,"initialDate"),m(this,"displayDate"),m(this,"customEventTypes",Object.keys(ht)),m(this,"wrapperEl",T("div",{cls:["wrapper","minical"]})),m(this,"calBodyEl",T("div",{cls:"minical-body"})),m(this,"headerEl",T("div",{cls:"minical-header"})),m(this,"headerSpan",T("span")),m(this,"weekdayEls",new Array(7).fill("").map((t=>T("div",{cls:"weekday"})))),m(this,"weekdaySpans",new Array(7).fill("").map((()=>T("span",{cls:"weekday-title"})))),m(this,"dayEls",new Array(42).fill("").map(((t,e)=>T("div",{cls:["mc-day",e>35?"overflow":""].filter((t=>t))})))),m(this,"daySpans",new Array(42).fill("").map((()=>T("span")))),m(this,"dayDotContainers",new Array(42).fill("").map((()=>T("div",{cls:["mc-event-dot-container"]})))),m(this,"targetEl"),m(this,"navContainer",T("div",{cls:["mc-nav","container"]})),m(this,"nextMonthButton",T("button",{cls:["mc-nav","mc-next-month"]})),m(this,"prevMonthButton",T("button",{cls:["mc-nav","mc-prev-month"]})),m(this,"resetDateButton",T("button",{cls:["mc-nav","mc-reset-date"]})),m(this,"_dayElDateMap",new Map),t??(t={...tt});const e={...tt,...t};this.initialDate=e.initMonth,this.displayDate=this.initialDate,this.targetEl=e.targetEl,this.options={...e},this.options.events.length&&this.setEvents(this.options.events),this.setup()}setup(){return this.headerEl.append(this.headerSpan),this.options.allowNavigation&&this.options.displayNavButtons&&(this.navContainer.append(this.prevMonthButton,this.resetDateButton,this.nextMonthButton),this.headerEl.append(this.navContainer),this.initNavButtonConfigs()),this.addWeekdayNames(),this.weekdayEls.forEach(((t,e)=>{const n=this.weekdaySpans[e];t.append(n)})),this.dayEls.forEach(((t,e)=>{const n=this.daySpans[e],s=this.dayDotContainers[e];t.append(n,s)})),this.calBodyEl.append(...this.weekdayEls,...this.dayEls),this.wrapperEl.append(this.headerEl,this.calBodyEl),this.setDayNums().updateMonthTitle().initMinicalEventListener().initCalBodyClickListener(),this}get _displayDate(){return x(this.displayDate)}get startOfMonth(){return this._displayDate.startOf("month")}get endOfMonth(){return this._displayDate.endOf("month")}setDayNums(){const t=this.startOfMonth.day(),e=this.daySpans.slice(0,t),n=this.startOfMonth.daysInMonth(),s=this.daySpans.slice(t,t+n);[...e,...this.daySpans.slice(t+n)].forEach((t=>{t.innerText="";const e=t.parentElement;e.classList.add("outside-month"),e.classList.remove("in-month","today"),e.querySelector(".mc-event-dot-container").replaceChildren(),this._dayElDateMap.set(e,null)}));const i=this.getFilteredEventsForMonth();return s.forEach(((e,n)=>{const s=this.startOfMonth.add(n,"day");e.innerText=`${n+1}`;const a=i.filter((t=>x(t.date).isSame(s,"date"))),r=e.parentElement;this._dayElDateMap.set(r,s),r.classList.remove("outside-month"),r.classList.add("in-month"),r.classList.toggle("today",s.isToday());const o=this.dayDotContainers[t+n],h=a.map((t=>T("span",{cls:["mc-event-dot"]})));o.replaceChildren(...h)})),this.calBodyEl.classList.toggle("show-overflow",t+n>35),this}addWeekdayNames(){this.weekdaySpans.forEach(((t,e)=>{const n=x().set("day",e).format("dd");t.innerText=n}))}updateMonthTitle(){return this.headerSpan.innerText=this._displayDate.format("MMMM YY"),this}addToDom(){this.targetEl.append(this.wrapperEl)}nextMonth(){this.options.allowNavigation&&(this.displayDate=this.startOfMonth.add(1,"month").toDate(),this.dispatchMinicalEvent("monthchange"))}previousMonth(){this.options.allowNavigation&&(this.displayDate=this.startOfMonth.subtract(1,"month").toDate(),this.dispatchMinicalEvent("monthchange"))}resetDateToToday(){const t=x(),e=this._displayDate.isSame(t,"month");this.displayDate=t.toDate(),e||this.dispatchMinicalEvent("monthchange")}dispatchMinicalEvent(t,e){const n=new CustomEvent(`minical-${t}`,{bubbles:!0,detail:e});return this.wrapperEl.dispatchEvent(n),n}initMinicalEventListener(){return this.customEventTypes.map((t=>`minical-${t}`)).forEach((t=>{this.wrapperEl.addEventListener(t,this.handleMinicalEvents.bind(this))})),this}initNavButtonConfigs(){return this.options.allowNavigation&&this.options.displayNavButtons?([{btn:this.prevMonthButton,cb:this.previousMonth},{btn:this.nextMonthButton,cb:this.nextMonth},{btn:this.resetDateButton,cb:this.resetDateToToday}].forEach((t=>{const{btn:e,cb:n}=t;e.addEventListener("click",n.bind(this))})),this):void 0}handleCalBodyClickEvents(t){const{target:e}=t,n=e,s=this.dayEls.find((t=>t.contains(n)));if(s){const e=this._dayElDateMap.get(s);if(null!=e&&x.isDayjs(e)){const n=this.getFilteredEventsForDay(e);this.options.onDateClick&&this.options.onDateClick(e,n,t)}}}initCalBodyClickListener(){return this.calBodyEl.addEventListener("click",this.handleCalBodyClickEvents.bind(this)),this}handleMinicalEvents(t){const e=t.type.replace(/^minical-/,"");if(this.customEventTypes.includes(e))switch(e){case"monthchange":this.setDayNums().updateMonthTitle();break}}getFilteredEventsForMonth(){return this.events.filter((t=>{const e=x(t.date);return this._displayDate.isSame(e,"month")}))}getFilteredEventsForDay(t){const e=x(t);return this.events.filter((t=>{const n=x(t.date);return e.isSame(n,"date")}))}setEvents(t){if(!Array.isArray(t))throw new Error("must be an array of events. received type "+typeof t);const e=[...t],n=[],s=e.filter((t=>Object.hasOwn(t,"date")?!!R(t.date)||(X(t.date)?(t.date=new Date(t.date),!0):(n.push(t),!1)):(n.push(t),!1)));n.length,this.events=s}addEvents(t){if(!Array.isArray(t))throw new Error("must be an array of events. received type "+typeof t);const e=[...t],n=[],s=e.filter((t=>Object.hasOwn(t,"date")?!!R(t.date)||(X(t.date)?(t.date=new Date(t.date),!0):(n.push(t),!1)):(n.push(t),!1)));n.length;const i=[...new Set([...this.events,...s])];this.events=i}}export{ft as MiniCal};