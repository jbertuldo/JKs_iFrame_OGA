// Scorecard Calculator
		function calculateKPIs() {
			var ues = document.getElementById("ues").value;
			var releaseRate = document.getElementById("releaseRate").value;
			var nps = document.getElementById("nps").value;
			var quality = document.getElementById("quality").value;
			var transfer = document.getElementById("transfer").value;
			var twoIn48 = document.getElementById("twoIn48").value;
			var acceptRate = document.getElementById("acceptRate").value;
			var ais = document.getElementById("ais").value;
			var vgCount = document.getElementById("vgCount").value;
			var qocCount = document.getElementById("qocCount").value;
			var aGScore = document.getElementById("aGScore").value;
			var mia = document.getElementById("mia").value;
			var ooo = document.getElementById("ooo").value;

			// UES Result
			var uesResult;
			if (ues == "-" && releaseRate < 80) {
				uesResult = 1;
			} else if (ues == "-" && releaseRate >= 80) {
				uesResult = 2;
			} else if (ues >= 95.01) {
				uesResult = 5;
			} else if (ues < 95.01 && ues >= 94.01) {
				uesResult = 4;
			} else if (ues < 94.01 && ues >= 93.01) {
				uesResult = 3;
			} else if (ues < 93.01 && ues >= 91.01) {
				uesResult = 2;
			} else {
				uesResult = 1;
			}
			var uesResultMultiplier = uesResult * 0.15;

			// NPS Result
			var npsResult;
			if (nps == "-" && releaseRate < 80) {
				npsResult = 1;
			} else if (nps == "-" && releaseRate >= 80) {
				npsResult = 2;
			} else if (nps >= 83) {
				npsResult = 5;
			} else if (nps < 83 && nps >= 80) {
				npsResult = 4;
			} else if (nps < 80 && nps >= 77) {
				npsResult = 3;
			} else if (nps < 77 && nps >= 13) {
				npsResult = 2;
			} else {
				npsResult = 1;
			}
			var npsResultMultiplier = npsResult * 0.15;

			// Quality Result
			var qualityResult;
			if (quality == "-") {
				qualityResult = uesResult;
			} else if (quality >= 95.01) {
				qualityResult = 5;
			} else if (quality < 95.01 && quality >= 93.01) {
				qualityResult = 4;
			} else if (quality < 93.01 && quality >= 90.01) {
				qualityResult = 3;
			} else if (quality < 90.01 && quality >= 88.01) {
				qualityResult = 2;
			} else {
				qualityResult = 1;
			}
			var qualityResultMultiplier = qualityResult * 0.1;

			// Transfer Result
			var transferResult;
			if (transfer <= 4) {
				transferResult = 5;
			} else if (transfer > 4 && transfer <= 5) {
				transferResult = 4;
			} else if (transfer > 5 && transfer <= 7) {
				transferResult = 3;
			} else if (transfer > 7 && transfer <= 9) {
				transferResult = 2;
			} else {
				transferResult = 1;
			}
			var transferResultMultiplier = transferResult * 0.05;

			// 2in48 Result
			var twoIn48Result;
			if (twoIn48 == "-") {
				twoIn48Result = 1;
			} else if (twoIn48 <= 8.99) {
				twoIn48Result = 5;
			} else if (twoIn48 > 8.99 && twoIn48 <= 10) {
				twoIn48Result = 4;
			} else if (twoIn48 > 10 && twoIn48 <= 13) {
				twoIn48Result = 3;
			} else if (twoIn48 > 13 && twoIn48 <= 15) {
				twoIn48Result = 2;
			} else {
				twoIn48Result = 1;
			}
			var twoIn48ResultMultiplier = twoIn48Result * 0.1;

			// Accept Rate Result
			var acceptRateResult;
			if (acceptRate == "-") {
				acceptRateResult = 1;
			} else if (acceptRate >= 60.01) {
				acceptRateResult = 5;
			} else if (acceptRate < 60.01 && acceptRate >= 50.01) {
				acceptRateResult = 4;
			} else if (acceptRate < 50.01 && acceptRate >= 45.01) {
				acceptRateResult = 3;
			} else if (acceptRate < 45.01 && acceptRate >= 35.01) {
				acceptRateResult = 2;
			} else {
				acceptRateResult = 1;
			}
			var acceptRateResultMultiplier = acceptRateResult * 0.1;

			// AIS Result
			var aisResult;
			if (ais == "-") {
				aisResult = 1;
			} else if (ais >= 23) {
				aisResult = 5;
			} else if (ais < 23 && ais >= 20) {
				aisResult = 4;
			} else if (ais < 20 && ais >= 18.01) {
				aisResult = 3;
			} else if (ais < 18.01 && ais >= 15.01) {
				aisResult = 2;
			} else {
				aisResult = 1;
			}
			var aisResultMultiplier = aisResult * 0.05;

			// VG Count Result
			var vgCountResult;
			if (vgCount == "-") {
				vgCountResult = 1;
			} else if (vgCount >= 3) {
				vgCountResult = 5;
			} else if (vgCount == 2) {
				vgCountResult = 4;
			} else if (vgCount == 1) {
				vgCountResult = 3;
			} else {
				vgCountResult = 1;
			}
			var vgCountResultMultiplier = vgCountResult * 0.1;

			// QOC Count Result
			var qocCountResult;
			if (qocCount == "-") {
				qocCountResult = 1;
			} else if (qocCount >= 1) {
				qocCountResult = 5;
			} else {
				qocCountResult = 1;
			}
			var qocCountResultMultiplier = qocCountResult * 0.05;

			// A&G Result
			var aGResult;
			if (aGScore == "-") {
				aGResult = twoIn48Result;
			} else if (aGScore >= 95.01) {
				aGResult = 5;
			} else if (aGScore < 95.01 && aGScore >= 88.01) {
				aGResult = 4;
			} else if (aGScore < 88.01 && aGScore >= 85.01) {
				aGResult = 3;
			} else if (aGScore < 85.01 && aGScore >= 80.01) {
				aGResult = 2;
			} else {
				aGResult = 1;
			}
			var aGResultMultiplier = aGResult * 0.15;

			// Release Rate Result
			var releaseRateResult;
			if (releaseRate == "-") {
				releaseRateResult = -0.75;
			} else if (releaseRate >= 85) {
				releaseRateResult = 0.5;
			} else if (releaseRate < 84.99 && releaseRate >= 75.01) {
				releaseRateResult = 0;
			} else if (releaseRate < 75.01 && releaseRate >= 65.01) {
				releaseRateResult = -0.2;
			} else if (releaseRate < 65.01 && releaseRate >= 50.01) {
				releaseRateResult = -0.5;
			} else {
				releaseRateResult = -0.75;
			}

			// MIA Result
			var miaResult;
			if (mia <= 5) {
				miaResult = 0;
			} else if (mia > 5 && mia <= 6) {
				miaResult = -0.2;
			} else if (mia > 6 && mia <= 7) {
				miaResult = -0.5;
			} else {
				miaResult = -0.75;
			}

			// OOO Result
			var oooResult;
			if (ooo < 8) {
				oooResult = 0.2;
			} else if (ooo == 8) {
				oooResult = 0;
			} else if (ooo > 8 && ooo <= 9) {
				oooResult = -0.2;
			} else if (ooo > 9 && ooo <= 12) {
				oooResult = -0.5;
			} else {
				oooResult = -0.75;
			}

			var totalKPI = uesResultMultiplier + npsResultMultiplier + qualityResultMultiplier + twoIn48ResultMultiplier + transferResultMultiplier + acceptRateResultMultiplier + aisResultMultiplier + aGResultMultiplier + vgCountResultMultiplier + qocCountResultMultiplier + releaseRateResult + miaResult + oooResult;
			document.getElementById("totalKPI").innerHTML = totalKPI.toFixed(2);
		}
		
		function clearAll() {
			document.getElementById("ues").value = "";
			document.getElementById("nps").value = "";
			document.getElementById("quality").value = "";
			document.getElementById("transfer").value = "";
			document.getElementById("twoIn48").value = "";
			document.getElementById("acceptRate").value = "";
			document.getElementById("ais").value = "";
			document.getElementById("vgCount").value = "";
			document.getElementById("qocCount").value = "";
			document.getElementById("aGScore").value = "";
			document.getElementById("mia").value = "";
			document.getElementById("ooo").value = "";
			document.getElementById("totalKPI").innerHTML = "";
		}
			// RR Calculator
		function calculate() {
			var calls = parseInt(document.getElementById("calls").value);
			var released = parseInt(document.getElementById("released").value);

			var RR = released/calls;
			document.getElementById("RR").innerHTML = (RR*100).toFixed(2) + "%";

			var callsNeeded = ((calls - released) * 5) - calls;
			document.getElementById("callsNeeded").innerHTML = callsNeeded;
		}
			// UES Calculator
      function calculateWeightedAverage() {
        var uescount = parseFloat(document.getElementById("uescount").value);
        var actualues = parseFloat(document.getElementById("actualues").value);
        var guescount = parseFloat(document.getElementById("guescount").value);
        var uesgoal = parseFloat(document.getElementById("uesgoal").value);
        
        var sumOfWeights = actualues + uesgoal;
        var weightedSum = (uescount*actualues) + (guescount*uesgoal);
        
        var weightedAverage = weightedSum/sumOfWeights;
        
        document.getElementById("result").innerHTML = "UES Average: " + weightedAverage.toFixed(2);
      }
			// NPS Calculator
		function calculateNPS() {
			var detractors = parseInt(document.getElementById("detractors").value);
			var passives = parseInt(document.getElementById("passives").value);
			var promoters = parseInt(document.getElementById("promoters").value);
			var total = detractors + passives + promoters;
			var Tnps = ((promoters - detractors) / total) * 100;
			var promotersNeeded = (detractors * 13) + (passives * 6) - promoters;
			document.getElementById("total").innerHTML = "# of Survey: " + total;
			document.getElementById("Tnps").innerHTML = "NPS: " + Tnps.toFixed(2) + "%";
			document.getElementById("promotersNeeded").innerHTML = "# of Promoters needed: " + promotersNeeded;
		}
  //UES and NPS Goal Count
		function calculateUES() {
			var SCount = document.getElementById("SCount").value;
			var UESScore = document.getElementById("UESScore").value;
			var NPSScore = document.getElementById("NPSScore").value;

			var UESresult = SCount * ((0.97 - UESScore/100) / (1 - 0.97));
            var NPSresult = SCount * ((86 - NPSScore)/100) / (1 - 86/100);

			document.getElementById("UESresult").innerHTML = "P10s needed: " + UESresult.toFixed(0);
            document.getElementById("NPSresult").innerHTML = "Promoters Needed: " + NPSresult.toFixed(0);
		}
		
		//
  function addComment() {
        let commentInput = document.getElementById('commentInput');
        let commentText = commentInput.value;

        if (commentText.trim() !== '') {
            let commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerText = commentText;
            document.getElementById('comments').appendChild(commentDiv);
        }

        commentInput.value = '';
    }
!function(){var t={8552:function(t,n,r){var e=r(852)(r(5639),"DataView");t.exports=e},7071:function(t,n,r){var e=r(852)(r(5639),"Map");t.exports=e},3818:function(t,n,r){var e=r(852)(r(5639),"Promise");t.exports=e},8525:function(t,n,r){var e=r(852)(r(5639),"Set");t.exports=e},2705:function(t,n,r){var e=r(5639).Symbol;t.exports=e},577:function(t,n,r){var e=r(852)(r(5639),"WeakMap");t.exports=e},6874:function(t){t.exports=function(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}},4636:function(t,n,r){var e=r(2545),o=r(5694),i=r(1469),c=r(4144),s=r(5776),u=r(6719),a=Object.prototype.hasOwnProperty;t.exports=function(t,n){var r=i(t),f=!r&&o(t),l=!r&&!f&&c(t),p=!r&&!f&&!l&&u(t),v=r||f||l||p,b=v?e(t.length,String):[],d=b.length;for(var h in t)!n&&!a.call(t,h)||v&&("length"==h||l&&("offset"==h||"parent"==h)||p&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||s(h,d))||b.push(h);return b}},4865:function(t,n,r){var e=r(9465),o=r(7813),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,r){var c=t[n];i.call(t,n)&&o(c,r)&&(void 0!==r||n in t)||e(t,n,r)}},9465:function(t,n,r){var e=r(8777);t.exports=function(t,n,r){"__proto__"==n&&e?e(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}},4239:function(t,n,r){var e=r(2705),o=r(9607),i=r(2333),c=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},9454:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==e(t)}},8458:function(t,n,r){var e=r(3560),o=r(5346),i=r(3218),c=r(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,a=Object.prototype,f=u.toString,l=a.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?p:s).test(c(t))}},8749:function(t,n,r){var e=r(4239),o=r(1780),i=r(7005),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!c[e(t)]}},280:function(t,n,r){var e=r(5726),o=r(6916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!e(t))return o(t);var n=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&n.push(r);return n}},5976:function(t,n,r){var e=r(6557),o=r(5357),i=r(61);t.exports=function(t,n){return i(o(t,n,e),t+"")}},6560:function(t,n,r){var e=r(5703),o=r(8777),i=r(6557),c=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:i;t.exports=c},2545:function(t){t.exports=function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},7518:function(t){t.exports=function(t){return function(n){return t(n)}}},8363:function(t,n,r){var e=r(4865),o=r(9465);t.exports=function(t,n,r,i){var c=!r;r||(r={});for(var s=-1,u=n.length;++s<u;){var a=n[s],f=i?i(r[a],t[a],a,r,t):void 0;void 0===f&&(f=t[a]),c?o(r,a,f):e(r,a,f)}return r}},4429:function(t,n,r){var e=r(5639)["__core-js_shared__"];t.exports=e},1463:function(t,n,r){var e=r(5976),o=r(6612);t.exports=function(t){return e((function(n,r){var e=-1,i=r.length,c=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(c=t.length>3&&"function"==typeof c?(i--,c):void 0,s&&o(r[0],r[1],s)&&(c=i<3?void 0:c,i=1),n=Object(n);++e<i;){var u=r[e];u&&t(n,u,e,c)}return n}))}},8777:function(t,n,r){var e=r(852),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},1957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},852:function(t,n,r){var e=r(8458),o=r(7801);t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},9607:function(t,n,r){var e=r(2705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,s=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,s),r=t[s];try{t[s]=void 0;var e=!0}catch(t){}var o=c.call(t);return e&&(n?t[s]=r:delete t[s]),o}},4160:function(t,n,r){var e=r(8552),o=r(7071),i=r(3818),c=r(8525),s=r(577),u=r(4239),a=r(346),f="[object Map]",l="[object Promise]",p="[object Set]",v="[object WeakMap]",b="[object DataView]",d=a(e),h=a(o),y=a(i),x=a(c),g=a(s),j=u;(e&&j(new e(new ArrayBuffer(1)))!=b||o&&j(new o)!=f||i&&j(i.resolve())!=l||c&&j(new c)!=p||s&&j(new s)!=v)&&(j=function(t){var n=u(t),r="[object Object]"==n?t.constructor:void 0,e=r?a(r):"";if(e)switch(e){case d:return b;case h:return f;case y:return l;case x:return p;case g:return v}return n}),t.exports=j},7801:function(t){t.exports=function(t,n){return null==t?void 0:t[n]}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&n.test(t))&&t>-1&&t%1==0&&t<r}},6612:function(t,n,r){var e=r(7813),o=r(8612),i=r(5776),c=r(3218);t.exports=function(t,n,r){if(!c(r))return!1;var s=typeof n;return!!("number"==s?o(r)&&i(n,r.length):"string"==s&&n in r)&&e(r[n],t)}},5346:function(t,n,r){var e,o=r(4429),i=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!i&&i in t}},5726:function(t){var n=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||n)}},6916:function(t,n,r){var e=r(5569)(Object.keys,Object);t.exports=e},1167:function(t,n,r){t=r.nmd(t);var e=r(1957),o=n&&!n.nodeType&&n,i=o&&t&&!t.nodeType&&t,c=i&&i.exports===o&&e.process,s=function(){try{return i&&i.require&&i.require("util").types||c&&c.binding&&c.binding("util")}catch(t){}}();t.exports=s},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5569:function(t){t.exports=function(t,n){return function(r){return t(n(r))}}},5357:function(t,n,r){var e=r(6874),o=Math.max;t.exports=function(t,n,r){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,c=-1,s=o(i.length-n,0),u=Array(s);++c<s;)u[c]=i[n+c];c=-1;for(var a=Array(n+1);++c<n;)a[c]=i[c];return a[n]=r(u),e(t,this,a)}}},5639:function(t,n,r){var e=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},61:function(t,n,r){var e=r(6560),o=r(1275)(e);t.exports=o},1275:function(t){var n=Date.now;t.exports=function(t){var r=0,e=0;return function(){var o=n(),i=16-(o-e);if(e=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},346:function(t){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},8583:function(t,n,r){var e=r(4865),o=r(8363),i=r(1463),c=r(8612),s=r(5726),u=r(3674),a=Object.prototype.hasOwnProperty,f=i((function(t,n){if(s(n)||c(n))o(n,u(n),t);else for(var r in n)a.call(n,r)&&e(t,r,n[r])}));t.exports=f},5703:function(t){t.exports=function(t){return function(){return t}}},3279:function(t,n,r){var e=r(3218),o=r(7771),i=r(4841),c=Math.max,s=Math.min;t.exports=function(t,n,r){var u,a,f,l,p,v,b=0,d=!1,h=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var r=u,e=a;return u=a=void 0,b=n,l=t.apply(e,r)}function g(t){var r=t-v;return void 0===v||r>=n||r<0||h&&t-b>=f}function j(){var t=o();if(g(t))return m(t);p=setTimeout(j,function(t){var r=n-(t-v);return h?s(r,f-(t-b)):r}(t))}function m(t){return p=void 0,y&&u?x(t):(u=a=void 0,l)}function k(){var t=o(),r=g(t);if(u=arguments,a=this,v=t,r){if(void 0===p)return function(t){return b=t,p=setTimeout(j,n),d?x(t):l}(v);if(h)return clearTimeout(p),p=setTimeout(j,n),x(v)}return void 0===p&&(p=setTimeout(j,n)),l}return n=i(n)||0,e(r)&&(d=!!r.leading,f=(h="maxWait"in r)?c(i(r.maxWait)||0,n):f,y="trailing"in r?!!r.trailing:y),k.cancel=function(){void 0!==p&&clearTimeout(p),b=0,u=v=a=p=void 0},k.flush=function(){return void 0===p?l:m(o())},k}},7813:function(t){t.exports=function(t,n){return t===n||t!=t&&n!=n}},6557:function(t){t.exports=function(t){return t}},5694:function(t,n,r){var e=r(9454),o=r(7005),i=Object.prototype,c=i.hasOwnProperty,s=i.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(t){return o(t)&&c.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},1469:function(t){var n=Array.isArray;t.exports=n},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},4144:function(t,n,r){t=r.nmd(t);var e=r(5639),o=r(5062),i=n&&!n.nodeType&&n,c=i&&t&&!t.nodeType&&t,s=c&&c.exports===i?e.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u},1609:function(t,n,r){var e=r(280),o=r(4160),i=r(5694),c=r(1469),s=r(8612),u=r(4144),a=r(5726),f=r(6719),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(s(t)&&(c(t)||"string"==typeof t||"function"==typeof t.splice||u(t)||f(t)||i(t)))return!t.length;var n=o(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;if(a(t))return!e(t).length;for(var r in t)if(l.call(t,r))return!1;return!0}},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},6719:function(t,n,r){var e=r(8749),o=r(7518),i=r(1167),c=i&&i.isTypedArray,s=c?o(c):e;t.exports=s},3674:function(t,n,r){var e=r(4636),o=r(280),i=r(8612);t.exports=function(t){return i(t)?e(t):o(t)}},7771:function(t,n,r){var e=r(5639);t.exports=function(){return e.Date.now()}},5062:function(t){t.exports=function(){return!1}},3493:function(t,n,r){var e=r(3279),o=r(3218);t.exports=function(t,n,r){var i=!0,c=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,c="trailing"in r?!!r.trailing:c),e(t,n,{leading:i,maxWait:n,trailing:c})}},4841:function(t,n,r){var e=r(7561),o=r(3218),i=r(3448),c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=s.test(t);return r||u.test(t)?a(t.slice(2),r?2:8):c.test(t)?NaN:+t}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,r),i.loaded=!0,i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){"use strict";var t=r(3493),n=r.n(t),e=r(1609),o=r.n(e),i=r(8583),c=r.n(i);class s{constructor(t=".bsb-tpl-navbar-sticky",n={}){this.defaults={preStuckClass:"pre-stuck",stuckClass:"stuck",stickyTarget:null,stickyNode:null,stuckClassTimeout:null,stuckBg:null,stuckTheme:null,scrollYDown:250,scrollYUp:25,bsTheme:null},this.options=c()(this.defaults,n),this.selector=t,this.init()}init(){const t=document.querySelector(this.selector);if(null!=t){if(this.dataAtts(t),this.options.stickyNode=t,null!==this.options.stickyTarget){const t=document.querySelector(this.options.stickyTarget);null!=t&&(this.options.stickyNode=t)}window.addEventListener("scroll",n()((()=>this.scrollEvent(t,this.options.stickyNode)),1e3))}}dataAtts(t){o()(t.dataset.bsbStickyTarget)||(this.options.stickyTarget=t.dataset.bsbStickyTarget),o()(t.dataset.bsbStuckBg)||(this.options.stuckBg=t.dataset.bsbStuckBg),o()(t.dataset.bsbStuckTheme)||(this.options.stuckTheme=t.dataset.bsbStuckTheme),o()(t.dataset.bsbScrollYDown)||(this.options.scrollYDown=Number(t.dataset.bsbScrollYDown)),o()(t.dataset.bsbScrollYUp)||(this.options.scrollYUp=Number(t.dataset.bsbScrollYUp)),o()(t.dataset.bsTheme)||(this.options.bsTheme=t.dataset.bsTheme)}scrollEvent(t,n){const r=window.scrollY;r>=this.options.scrollYDown&&(n.classList.contains(this.options.preStuckClass)||(n.classList.add(this.options.preStuckClass),this.options.stuckClassTimeout=setTimeout((()=>{n.classList.add(this.options.stuckClass),null!==this.options.stuckBg&&t.classList.add(this.options.stuckBg),null!==this.options.stuckTheme&&t.setAttribute("data-bs-theme",this.options.stuckTheme)}),250)),n.classList.contains(this.options.stuckClass)&&clearTimeout(this.options.stuckClassTimeout)),r<=this.options.scrollYUp&&(n.classList.contains(this.options.preStuckClass)||n.classList.contains(this.options.stuckClass))&&(n.classList.remove(this.options.preStuckClass),n.classList.remove(this.options.stuckClass),null!==this.options.stuckBg&&t.classList.remove(this.options.stuckBg),null!==this.options.bsTheme&&t.setAttribute("data-bs-theme",this.options.bsTheme))}}!function(){function t(){new s}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}()}()}();

/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/projects/project-2/controller.js":
/*!*********************************************************!*\
  !*** ./src/components/projects/project-2/controller.js ***!
  \*********************************************************/
/***/ (function() {

//
// Controller
//

/* global jQuery */

//
// Initialization
//

(function ($) {
  const bsbProject2 = {
    gridSelector: '.bsb-project-2-grid',
    itemSelector: '.bsb-project-2-item',
    grid: '',
    // Initiated
    initiated() {
      // Element
      const el = document.querySelector(bsbProject2.gridSelector);
      // Selector Validation
      if (typeof el !== 'undefined' && el !== null) {
        el.classList.add('bsb-project-2-initiated');
      }
    },
    // Init
    init() {
      // Element
      const el = $(bsbProject2.gridSelector);

      // Selector Validation
      if (el.length > 0) {
        // Isotope Grid
        bsbProject2.grid = el.imagesLoaded(function () {
          // init Isotope after all images have loaded
          bsbProject2.grid.isotope({
            // options
            itemSelector: bsbProject2.itemSelector,
            layoutMode: 'packery',
            transitionDuration: '0.8s'
          });
        });

        // Isotope Initiated
        bsbProject2.initiated();
      }
    }
  };

  //
  // Document Ready Modules
  //

  function docReadyModules() {}

  //
  // Window Load Modules
  //

  function winLoadModules() {
    bsbProject2.init();
  }

  //
  // Document Ready
  //

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', docReadyModules);
  } else {
    docReadyModules();
  }

  //
  // Window Load
  //

  window.addEventListener('load', winLoadModules, false);
})(jQuery);

/***/ }),

/***/ "./src/components/projects/project-2/component.scss":
/*!**********************************************************!*\
  !*** ./src/components/projects/project-2/component.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************************************!*\
  !*** ./src/components/projects/project-2/project-2.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.scss */ "./src/components/projects/project-2/component.scss");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/components/projects/project-2/controller.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_1__);
//
// SASS
//



//
// JS
//


}();
/******/ })()
;
//# sourceMappingURL=project-2.js.map

!function(){var t={8552:function(t,n,r){var e=r(852)(r(5639),"DataView");t.exports=e},7071:function(t,n,r){var e=r(852)(r(5639),"Map");t.exports=e},3818:function(t,n,r){var e=r(852)(r(5639),"Promise");t.exports=e},8525:function(t,n,r){var e=r(852)(r(5639),"Set");t.exports=e},2705:function(t,n,r){var e=r(5639).Symbol;t.exports=e},577:function(t,n,r){var e=r(852)(r(5639),"WeakMap");t.exports=e},6874:function(t){t.exports=function(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}},4636:function(t,n,r){var e=r(2545),o=r(5694),i=r(1469),c=r(4144),s=r(5776),u=r(6719),a=Object.prototype.hasOwnProperty;t.exports=function(t,n){var r=i(t),f=!r&&o(t),l=!r&&!f&&c(t),p=!r&&!f&&!l&&u(t),v=r||f||l||p,b=v?e(t.length,String):[],d=b.length;for(var h in t)!n&&!a.call(t,h)||v&&("length"==h||l&&("offset"==h||"parent"==h)||p&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||s(h,d))||b.push(h);return b}},4865:function(t,n,r){var e=r(9465),o=r(7813),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,r){var c=t[n];i.call(t,n)&&o(c,r)&&(void 0!==r||n in t)||e(t,n,r)}},9465:function(t,n,r){var e=r(8777);t.exports=function(t,n,r){"__proto__"==n&&e?e(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}},4239:function(t,n,r){var e=r(2705),o=r(9607),i=r(2333),c=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},9454:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==e(t)}},8458:function(t,n,r){var e=r(3560),o=r(5346),i=r(3218),c=r(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,a=Object.prototype,f=u.toString,l=a.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?p:s).test(c(t))}},8749:function(t,n,r){var e=r(4239),o=r(1780),i=r(7005),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!c[e(t)]}},280:function(t,n,r){var e=r(5726),o=r(6916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!e(t))return o(t);var n=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&n.push(r);return n}},5976:function(t,n,r){var e=r(6557),o=r(5357),i=r(61);t.exports=function(t,n){return i(o(t,n,e),t+"")}},6560:function(t,n,r){var e=r(5703),o=r(8777),i=r(6557),c=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:e(n),writable:!0})}:i;t.exports=c},2545:function(t){t.exports=function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},7518:function(t){t.exports=function(t){return function(n){return t(n)}}},8363:function(t,n,r){var e=r(4865),o=r(9465);t.exports=function(t,n,r,i){var c=!r;r||(r={});for(var s=-1,u=n.length;++s<u;){var a=n[s],f=i?i(r[a],t[a],a,r,t):void 0;void 0===f&&(f=t[a]),c?o(r,a,f):e(r,a,f)}return r}},4429:function(t,n,r){var e=r(5639)["__core-js_shared__"];t.exports=e},1463:function(t,n,r){var e=r(5976),o=r(6612);t.exports=function(t){return e((function(n,r){var e=-1,i=r.length,c=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(c=t.length>3&&"function"==typeof c?(i--,c):void 0,s&&o(r[0],r[1],s)&&(c=i<3?void 0:c,i=1),n=Object(n);++e<i;){var u=r[e];u&&t(n,u,e,c)}return n}))}},8777:function(t,n,r){var e=r(852),o=function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},1957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},852:function(t,n,r){var e=r(8458),o=r(7801);t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},9607:function(t,n,r){var e=r(2705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,s=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,s),r=t[s];try{t[s]=void 0;var e=!0}catch(t){}var o=c.call(t);return e&&(n?t[s]=r:delete t[s]),o}},4160:function(t,n,r){var e=r(8552),o=r(7071),i=r(3818),c=r(8525),s=r(577),u=r(4239),a=r(346),f="[object Map]",l="[object Promise]",p="[object Set]",v="[object WeakMap]",b="[object DataView]",d=a(e),h=a(o),y=a(i),x=a(c),g=a(s),j=u;(e&&j(new e(new ArrayBuffer(1)))!=b||o&&j(new o)!=f||i&&j(i.resolve())!=l||c&&j(new c)!=p||s&&j(new s)!=v)&&(j=function(t){var n=u(t),r="[object Object]"==n?t.constructor:void 0,e=r?a(r):"";if(e)switch(e){case d:return b;case h:return f;case y:return l;case x:return p;case g:return v}return n}),t.exports=j},7801:function(t){t.exports=function(t,n){return null==t?void 0:t[n]}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&n.test(t))&&t>-1&&t%1==0&&t<r}},6612:function(t,n,r){var e=r(7813),o=r(8612),i=r(5776),c=r(3218);t.exports=function(t,n,r){if(!c(r))return!1;var s=typeof n;return!!("number"==s?o(r)&&i(n,r.length):"string"==s&&n in r)&&e(r[n],t)}},5346:function(t,n,r){var e,o=r(4429),i=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!i&&i in t}},5726:function(t){var n=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||n)}},6916:function(t,n,r){var e=r(5569)(Object.keys,Object);t.exports=e},1167:function(t,n,r){t=r.nmd(t);var e=r(1957),o=n&&!n.nodeType&&n,i=o&&t&&!t.nodeType&&t,c=i&&i.exports===o&&e.process,s=function(){try{return i&&i.require&&i.require("util").types||c&&c.binding&&c.binding("util")}catch(t){}}();t.exports=s},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5569:function(t){t.exports=function(t,n){return function(r){return t(n(r))}}},5357:function(t,n,r){var e=r(6874),o=Math.max;t.exports=function(t,n,r){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,c=-1,s=o(i.length-n,0),u=Array(s);++c<s;)u[c]=i[n+c];c=-1;for(var a=Array(n+1);++c<n;)a[c]=i[c];return a[n]=r(u),e(t,this,a)}}},5639:function(t,n,r){var e=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},61:function(t,n,r){var e=r(6560),o=r(1275)(e);t.exports=o},1275:function(t){var n=Date.now;t.exports=function(t){var r=0,e=0;return function(){var o=n(),i=16-(o-e);if(e=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},346:function(t){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},8583:function(t,n,r){var e=r(4865),o=r(8363),i=r(1463),c=r(8612),s=r(5726),u=r(3674),a=Object.prototype.hasOwnProperty,f=i((function(t,n){if(s(n)||c(n))o(n,u(n),t);else for(var r in n)a.call(n,r)&&e(t,r,n[r])}));t.exports=f},5703:function(t){t.exports=function(t){return function(){return t}}},3279:function(t,n,r){var e=r(3218),o=r(7771),i=r(4841),c=Math.max,s=Math.min;t.exports=function(t,n,r){var u,a,f,l,p,v,b=0,d=!1,h=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var r=u,e=a;return u=a=void 0,b=n,l=t.apply(e,r)}function g(t){var r=t-v;return void 0===v||r>=n||r<0||h&&t-b>=f}function j(){var t=o();if(g(t))return m(t);p=setTimeout(j,function(t){var r=n-(t-v);return h?s(r,f-(t-b)):r}(t))}function m(t){return p=void 0,y&&u?x(t):(u=a=void 0,l)}function k(){var t=o(),r=g(t);if(u=arguments,a=this,v=t,r){if(void 0===p)return function(t){return b=t,p=setTimeout(j,n),d?x(t):l}(v);if(h)return clearTimeout(p),p=setTimeout(j,n),x(v)}return void 0===p&&(p=setTimeout(j,n)),l}return n=i(n)||0,e(r)&&(d=!!r.leading,f=(h="maxWait"in r)?c(i(r.maxWait)||0,n):f,y="trailing"in r?!!r.trailing:y),k.cancel=function(){void 0!==p&&clearTimeout(p),b=0,u=v=a=p=void 0},k.flush=function(){return void 0===p?l:m(o())},k}},7813:function(t){t.exports=function(t,n){return t===n||t!=t&&n!=n}},6557:function(t){t.exports=function(t){return t}},5694:function(t,n,r){var e=r(9454),o=r(7005),i=Object.prototype,c=i.hasOwnProperty,s=i.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(t){return o(t)&&c.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},1469:function(t){var n=Array.isArray;t.exports=n},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},4144:function(t,n,r){t=r.nmd(t);var e=r(5639),o=r(5062),i=n&&!n.nodeType&&n,c=i&&t&&!t.nodeType&&t,s=c&&c.exports===i?e.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u},1609:function(t,n,r){var e=r(280),o=r(4160),i=r(5694),c=r(1469),s=r(8612),u=r(4144),a=r(5726),f=r(6719),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(s(t)&&(c(t)||"string"==typeof t||"function"==typeof t.splice||u(t)||f(t)||i(t)))return!t.length;var n=o(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;if(a(t))return!e(t).length;for(var r in t)if(l.call(t,r))return!1;return!0}},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},6719:function(t,n,r){var e=r(8749),o=r(7518),i=r(1167),c=i&&i.isTypedArray,s=c?o(c):e;t.exports=s},3674:function(t,n,r){var e=r(4636),o=r(280),i=r(8612);t.exports=function(t){return i(t)?e(t):o(t)}},7771:function(t,n,r){var e=r(5639);t.exports=function(){return e.Date.now()}},5062:function(t){t.exports=function(){return!1}},3493:function(t,n,r){var e=r(3279),o=r(3218);t.exports=function(t,n,r){var i=!0,c=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,c="trailing"in r?!!r.trailing:c),e(t,n,{leading:i,maxWait:n,trailing:c})}},4841:function(t,n,r){var e=r(7561),o=r(3218),i=r(3448),c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=s.test(t);return r||u.test(t)?a(t.slice(2),r?2:8):c.test(t)?NaN:+t}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,r),i.loaded=!0,i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){"use strict";var t=r(3493),n=r.n(t),e=r(1609),o=r.n(e),i=r(8583),c=r.n(i);class s{constructor(t=".bsb-tpl-navbar-sticky",n={}){this.defaults={preStuckClass:"pre-stuck",stuckClass:"stuck",stickyTarget:null,stickyNode:null,stuckClassTimeout:null,stuckBg:null,stuckTheme:null,scrollYDown:250,scrollYUp:25,bsTheme:null},this.options=c()(this.defaults,n),this.selector=t,this.init()}init(){const t=document.querySelector(this.selector);if(null!=t){if(this.dataAtts(t),this.options.stickyNode=t,null!==this.options.stickyTarget){const t=document.querySelector(this.options.stickyTarget);null!=t&&(this.options.stickyNode=t)}window.addEventListener("scroll",n()((()=>this.scrollEvent(t,this.options.stickyNode)),1e3))}}dataAtts(t){o()(t.dataset.bsbStickyTarget)||(this.options.stickyTarget=t.dataset.bsbStickyTarget),o()(t.dataset.bsbStuckBg)||(this.options.stuckBg=t.dataset.bsbStuckBg),o()(t.dataset.bsbStuckTheme)||(this.options.stuckTheme=t.dataset.bsbStuckTheme),o()(t.dataset.bsbScrollYDown)||(this.options.scrollYDown=Number(t.dataset.bsbScrollYDown)),o()(t.dataset.bsbScrollYUp)||(this.options.scrollYUp=Number(t.dataset.bsbScrollYUp)),o()(t.dataset.bsTheme)||(this.options.bsTheme=t.dataset.bsTheme)}scrollEvent(t,n){const r=window.scrollY;r>=this.options.scrollYDown&&(n.classList.contains(this.options.preStuckClass)||(n.classList.add(this.options.preStuckClass),this.options.stuckClassTimeout=setTimeout((()=>{n.classList.add(this.options.stuckClass),null!==this.options.stuckBg&&t.classList.add(this.options.stuckBg),null!==this.options.stuckTheme&&t.setAttribute("data-bs-theme",this.options.stuckTheme)}),250)),n.classList.contains(this.options.stuckClass)&&clearTimeout(this.options.stuckClassTimeout)),r<=this.options.scrollYUp&&(n.classList.contains(this.options.preStuckClass)||n.classList.contains(this.options.stuckClass))&&(n.classList.remove(this.options.preStuckClass),n.classList.remove(this.options.stuckClass),null!==this.options.stuckBg&&t.classList.remove(this.options.stuckBg),null!==this.options.bsTheme&&t.setAttribute("data-bs-theme",this.options.bsTheme))}}!function(){function t(){new s}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}()}()}();

// Scorecard Calculator
		function calculateKPIs() {
			var ues = document.getElementById("ues").value;
			var releaseRate = document.getElementById("releaseRate").value;
			var nps = document.getElementById("nps").value;
			var quality = document.getElementById("quality").value;
			var transfer = document.getElementById("transfer").value;
			var twoIn48 = document.getElementById("twoIn48").value;
			var acceptRate = document.getElementById("acceptRate").value;
			var ais = document.getElementById("ais").value;
			var vgCount = document.getElementById("vgCount").value;
			var qocCount = document.getElementById("qocCount").value;
			var aGScore = document.getElementById("aGScore").value;
			var mia = document.getElementById("mia").value;
			var ooo = document.getElementById("ooo").value;

			// UES Result
			var uesResult;
			if (ues == "-" && releaseRate < 80) {
				uesResult = 1;
			} else if (ues == "-" && releaseRate >= 80) {
				uesResult = 2;
			} else if (ues >= 95.01) {
				uesResult = 5;
			} else if (ues < 95.01 && ues >= 94.01) {
				uesResult = 4;
			} else if (ues < 94.01 && ues >= 93.01) {
				uesResult = 3;
			} else if (ues < 93.01 && ues >= 91.01) {
				uesResult = 2;
			} else {
				uesResult = 1;
			}
			var uesResultMultiplier = uesResult * 0.15;

			// NPS Result
			var npsResult;
			if (nps == "-" && releaseRate < 80) {
				npsResult = 1;
			} else if (nps == "-" && releaseRate >= 80) {
				npsResult = 2;
			} else if (nps >= 83) {
				npsResult = 5;
			} else if (nps < 83 && nps >= 80) {
				npsResult = 4;
			} else if (nps < 80 && nps >= 77) {
				npsResult = 3;
			} else if (nps < 77 && nps >= 13) {
				npsResult = 2;
			} else {
				npsResult = 1;
			}
			var npsResultMultiplier = npsResult * 0.15;

			// Quality Result
			var qualityResult;
			if (quality == "-") {
				qualityResult = uesResult;
			} else if (quality >= 95.01) {
				qualityResult = 5;
			} else if (quality < 95.01 && quality >= 93.01) {
				qualityResult = 4;
			} else if (quality < 93.01 && quality >= 90.01) {
				qualityResult = 3;
			} else if (quality < 90.01 && quality >= 88.01) {
				qualityResult = 2;
			} else {
				qualityResult = 1;
			}
			var qualityResultMultiplier = qualityResult * 0.1;

			// Transfer Result
			var transferResult;
			if (transfer <= 4) {
				transferResult = 5;
			} else if (transfer > 4 && transfer <= 5) {
				transferResult = 4;
			} else if (transfer > 5 && transfer <= 7) {
				transferResult = 3;
			} else if (transfer > 7 && transfer <= 9) {
				transferResult = 2;
			} else {
				transferResult = 1;
			}
			var transferResultMultiplier = transferResult * 0.05;

			// 2in48 Result
			var twoIn48Result;
			if (twoIn48 == "-") {
				twoIn48Result = 1;
			} else if (twoIn48 <= 8.99) {
				twoIn48Result = 5;
			} else if (twoIn48 > 8.99 && twoIn48 <= 10) {
				twoIn48Result = 4;
			} else if (twoIn48 > 10 && twoIn48 <= 13) {
				twoIn48Result = 3;
			} else if (twoIn48 > 13 && twoIn48 <= 15) {
				twoIn48Result = 2;
			} else {
				twoIn48Result = 1;
			}
			var twoIn48ResultMultiplier = twoIn48Result * 0.1;

			// Accept Rate Result
			var acceptRateResult;
			if (acceptRate == "-") {
				acceptRateResult = 1;
			} else if (acceptRate >= 60.01) {
				acceptRateResult = 5;
			} else if (acceptRate < 60.01 && acceptRate >= 50.01) {
				acceptRateResult = 4;
			} else if (acceptRate < 50.01 && acceptRate >= 45.01) {
				acceptRateResult = 3;
			} else if (acceptRate < 45.01 && acceptRate >= 35.01) {
				acceptRateResult = 2;
			} else {
				acceptRateResult = 1;
			}
			var acceptRateResultMultiplier = acceptRateResult * 0.1;

			// AIS Result
			var aisResult;
			if (ais == "-") {
				aisResult = 1;
			} else if (ais >= 23) {
				aisResult = 5;
			} else if (ais < 23 && ais >= 20) {
				aisResult = 4;
			} else if (ais < 20 && ais >= 18.01) {
				aisResult = 3;
			} else if (ais < 18.01 && ais >= 15.01) {
				aisResult = 2;
			} else {
				aisResult = 1;
			}
			var aisResultMultiplier = aisResult * 0.05;

			// VG Count Result
			var vgCountResult;
			if (vgCount == "-") {
				vgCountResult = 1;
			} else if (vgCount >= 3) {
				vgCountResult = 5;
			} else if (vgCount == 2) {
				vgCountResult = 4;
			} else if (vgCount == 1) {
				vgCountResult = 3;
			} else {
				vgCountResult = 1;
			}
			var vgCountResultMultiplier = vgCountResult * 0.1;

			// QOC Count Result
			var qocCountResult;
			if (qocCount == "-") {
				qocCountResult = 1;
			} else if (qocCount >= 1) {
				qocCountResult = 5;
			} else {
				qocCountResult = 1;
			}
			var qocCountResultMultiplier = qocCountResult * 0.05;

			// A&G Result
			var aGResult;
			if (aGScore == "-") {
				aGResult = twoIn48Result;
			} else if (aGScore >= 95.01) {
				aGResult = 5;
			} else if (aGScore < 95.01 && aGScore >= 88.01) {
				aGResult = 4;
			} else if (aGScore < 88.01 && aGScore >= 85.01) {
				aGResult = 3;
			} else if (aGScore < 85.01 && aGScore >= 80.01) {
				aGResult = 2;
			} else {
				aGResult = 1;
			}
			var aGResultMultiplier = aGResult * 0.15;

			// Release Rate Result
			var releaseRateResult;
			if (releaseRate == "-") {
				releaseRateResult = -0.75;
			} else if (releaseRate >= 85) {
				releaseRateResult = 0.5;
			} else if (releaseRate < 84.99 && releaseRate >= 75.01) {
				releaseRateResult = 0;
			} else if (releaseRate < 75.01 && releaseRate >= 65.01) {
				releaseRateResult = -0.2;
			} else if (releaseRate < 65.01 && releaseRate >= 50.01) {
				releaseRateResult = -0.5;
			} else {
				releaseRateResult = -0.75;
			}

			// MIA Result
			var miaResult;
			if (mia <= 5) {
				miaResult = 0;
			} else if (mia > 5 && mia <= 6) {
				miaResult = -0.2;
			} else if (mia > 6 && mia <= 7) {
				miaResult = -0.5;
			} else {
				miaResult = -0.75;
			}

			// OOO Result
			var oooResult;
			if (ooo < 8) {
				oooResult = 0.2;
			} else if (ooo == 8) {
				oooResult = 0;
			} else if (ooo > 8 && ooo <= 9) {
				oooResult = -0.2;
			} else if (ooo > 9 && ooo <= 12) {
				oooResult = -0.5;
			} else {
				oooResult = -0.75;
			}

			var totalKPI = uesResultMultiplier + npsResultMultiplier + qualityResultMultiplier + twoIn48ResultMultiplier + transferResultMultiplier + acceptRateResultMultiplier + aisResultMultiplier + aGResultMultiplier + vgCountResultMultiplier + qocCountResultMultiplier + releaseRateResult + miaResult + oooResult;
			document.getElementById("totalKPI").innerHTML = totalKPI.toFixed(2);
		}
		
		function clearAll() {
			document.getElementById("ues").value = "";
			document.getElementById("nps").value = "";
			document.getElementById("quality").value = "";
			document.getElementById("transfer").value = "";
			document.getElementById("twoIn48").value = "";
			document.getElementById("acceptRate").value = "";
			document.getElementById("ais").value = "";
			document.getElementById("vgCount").value = "";
			document.getElementById("qocCount").value = "";
			document.getElementById("aGScore").value = "";
			document.getElementById("mia").value = "";
			document.getElementById("ooo").value = "";
			document.getElementById("totalKPI").innerHTML = "";
		}
			// RR Calculator
		function calculate() {
			var calls = parseInt(document.getElementById("calls").value);
			var released = parseInt(document.getElementById("released").value);

			var RR = released/calls;
			document.getElementById("RR").innerHTML = (RR*100).toFixed(2) + "%";

			var callsNeeded = ((calls - released) * 5) - calls;
			document.getElementById("callsNeeded").innerHTML = callsNeeded;
		}
			// UES Calculator
      function calculateWeightedAverage() {
        var uescount = parseFloat(document.getElementById("uescount").value);
        var actualues = parseFloat(document.getElementById("actualues").value);
        var guescount = parseFloat(document.getElementById("guescount").value);
        var uesgoal = parseFloat(document.getElementById("uesgoal").value);
        
        var sumOfWeights = actualues + uesgoal;
        var weightedSum = (uescount*actualues) + (guescount*uesgoal);
        
        var weightedAverage = weightedSum/sumOfWeights;
        
        document.getElementById("result").innerHTML = "UES Average: " + weightedAverage.toFixed(2);
      }
			// NPS Calculator
		function calculateNPS() {
			var detractors = parseInt(document.getElementById("detractors").value);
			var passives = parseInt(document.getElementById("passives").value);
			var promoters = parseInt(document.getElementById("promoters").value);
			var total = detractors + passives + promoters;
			var Tnps = ((promoters - detractors) / total) * 100;
			var promotersNeeded = (detractors * 13) + (passives * 6) - promoters;
			document.getElementById("total").innerHTML = "# of Survey: " + total;
			document.getElementById("Tnps").innerHTML = "NPS: " + Tnps.toFixed(2) + "%";
			document.getElementById("promotersNeeded").innerHTML = "# of Promoters needed: " + promotersNeeded;
		}
  //UES and NPS Goal Count
		function calculateUES() {
			var SCount = document.getElementById("SCount").value;
			var UESScore = document.getElementById("UESScore").value;
			var NPSScore = document.getElementById("NPSScore").value;

			var UESresult = SCount * ((0.97 - UESScore/100) / (1 - 0.97));
            var NPSresult = SCount * ((86 - NPSScore)/100) / (1 - 86/100);

			document.getElementById("UESresult").innerHTML = "P10s needed: " + UESresult.toFixed(0);
            document.getElementById("NPSresult").innerHTML = "Promoters Needed: " + NPSresult.toFixed(0);
		}
		
		//
  function addComment() {
        let commentInput = document.getElementById('commentInput');
        let commentText = commentInput.value;

        if (commentText.trim() !== '') {
            let commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerText = commentText;
            document.getElementById('comments').appendChild(commentDiv);
        }

        commentInput.value = '';
    }
