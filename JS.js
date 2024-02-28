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
