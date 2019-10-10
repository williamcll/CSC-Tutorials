  var Currency = {
    rates: {"USD":1.0,"EUR":1.09596,"GBP":1.22209,"CAD":0.750648,"ARS":0.0172883,"AUD":0.672846,"BRL":0.244195,"CLP":0.0013799,"CNY":0.139969,"CYP":0.397899,"CZK":0.0424968,"DKK":0.146731,"EEK":0.0706676,"HKD":0.127475,"HUF":0.00328194,"ISK":0.00798181,"INR":0.0140147,"JMD":0.00745712,"JPY":0.00934816,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0509482,"NZD":0.629806,"NOK":0.109147,"PLN":0.253575,"SGD":0.723292,"SKK":21.5517,"SIT":175.439,"ZAR":0.0654564,"KRW":0.000833776,"SEK":0.100597,"CHF":1.00742,"TWD":0.0325148,"UYU":0.0269329,"MYR":0.238489,"BSD":1.0,"CRC":0.00172211,"RON":0.230696,"PHP":0.0192824,"AED":0.272294,"VEB":0.000100125,"IDR":7.05699e-05,"TRY":0.171327,"THB":0.0328741,"TTD":0.147718,"ILS":0.285232,"SYP":0.00194177,"XCD":0.370032,"COP":0.000289707,"RUB":0.0153391,"HRK":0.147667,"KZT":0.00256434,"TZS":0.000434849,"XPT":884.701,"SAR":0.266667,"NIO":0.0297566,"LAK":0.000113556,"OMR":2.60078,"AMD":0.00209863,"CDF":0.000601461,"KPW":0.001111,"SPL":6.0,"KES":0.00963498,"ZWD":0.00276319,"KHR":0.000244746,"MVR":0.0649601,"GTQ":0.12898,"BZD":0.496287,"BYR":4.82231e-05,"LYD":0.704392,"DZD":0.00828868,"BIF":0.000537576,"GIP":1.22209,"BOB":0.144678,"XOF":0.00167079,"STD":4.46866e-05,"NGN":0.00276649,"PGK":0.293607,"ERN":0.0666667,"MWK":0.00136926,"CUP":0.0377358,"GMD":0.0198009,"CVE":0.00993892,"BTN":0.0140147,"XAF":0.00167079,"UGX":0.000270817,"MAD":0.103,"MNT":0.000374767,"LSL":0.0654564,"XAG":17.7769,"TOP":0.432009,"SHP":1.22209,"RSD":0.00933545,"HTG":0.0104287,"MGA":0.00027349,"MZN":0.0161884,"FKP":1.22209,"BWP":0.0905323,"HNL":0.0406336,"PYG":0.000156283,"JEP":1.22209,"EGP":0.0613953,"LBP":0.00066335,"ANG":0.558659,"WST":0.372107,"TVD":0.672846,"GYD":0.00479007,"GGP":1.22209,"NPR":0.00871829,"KMF":0.00222772,"IRR":2.37898e-05,"XPD":1666.08,"SRD":0.134095,"TMM":5.69801e-05,"SZL":0.0654564,"MOP":0.123763,"BMD":1.0,"XPF":0.00918418,"ETB":0.0337646,"JOD":1.41044,"MDL":0.0565499,"MRO":0.00269591,"YER":0.00399535,"BAM":0.560358,"AWG":0.558659,"PEN":0.295555,"VEF":0.100125,"SLL":0.000106045,"KYD":1.21953,"AOA":0.00261331,"TND":0.349816,"TJS":0.103213,"SCR":0.0732302,"LKR":0.00554506,"DJF":0.00562525,"GNF":0.000108065,"VUV":0.00844771,"SDG":0.0221545,"IMP":1.22209,"GEL":0.337278,"FJD":0.454025,"DOP":0.0190401,"XDR":1.36454,"MUR":0.0274727,"MMK":0.000661811,"LRD":0.00473928,"BBD":0.5,"ZMK":7.62196e-05,"XAU":1508.62,"VND":4.30922e-05,"UAH":0.0404819,"TMT":0.2849,"IQD":0.000837188,"BGN":0.560358,"KGS":0.0143248,"RWF":0.00108247,"BHD":2.65957,"UZS":0.000105982,"PKR":0.006376,"MKD":0.0178531,"AFN":0.0127715,"NAD":0.0654564,"BDT":0.0118252,"AZN":0.589458,"SOS":0.00172235,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.122852,"ALL":0.00894527,"BND":0.723292,"KWD":3.2892,"GHS":0.183488,"ZMW":0.0762196,"XBT":8203.81,"NTD":0.0337206,"BYN":0.482231,"CNH":0.139618,"MRU":0.0269591,"STN":0.0446866,"VES":4.97231e-05,"MXV":0.323845},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };
