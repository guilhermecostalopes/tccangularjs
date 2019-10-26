

(function () {

    var app = angular.module('defaultFilters');

    app.filter('cpf',['textHelper',function(textHelper) { 
       return function (cpf) {
           if (!cpf) return;
            var text=cpf;
            if(typeof cpf!='string'){
                text=cpf.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            text=textHelper.fillLeft(text,'0',11)
            return textHelper.format(text, "000.000.000-00");

       }
    }]);

    app.filter('porcentagem',['textHelper',function(textHelper) {
       return function (porcentagem) {
           if (!porcentagem) return;
            var text=porcentagem;
            if(typeof porcentagem!='string'){
                text=porcentagem.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            return text + ' %';

       }
    }]);
    
    app.filter('pontoporvirgula',['textHelper',function(textHelper) {
        return function (valor) {
            if (!valor) return;
             var text=valor;
             if(typeof valor!='string'){
                 text=valor.toString();
                 textHelper.replaceAll(text,'',/\D/);
             }
             return text.replace('.', ',');
        }
     }]);

    app.filter('completarzero',['textHelper',function(textHelper) {
        return function (valor) {
            if (!valor) return;
             var text=valor;
             if(typeof valor!='string'){
                 text=valor.toString();
             }
             
             var array = text.split(',');
			 if (array.length > 1) {
				var tam = array[1].length;
				if (tam < 2) {
					text += '0';
				}
			 } else {
				 text += ',00';
			 }
             
             return text;
        }
     }]);
    
    app.filter('cpfcnpj',['textHelper',function(textHelper) {
       return function (cpf) {
           if (!cpf) return;
            var text=cpf;
            if(typeof cpf!='string'){
                text=cpf.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            if (text.length == 11) {
                text = textHelper.fillLeft(text, '0', 11)
                return textHelper.format(text, "000.000.000-00");
            }
            else if (text.length == 14) {
                text = textHelper.fillLeft(text, '0', 14)
                return textHelper.format(text, "00.000.000/0000-00");
            }

       }
    }]);

    app.filter('cnpj',['textHelper',function(textHelper) { 
       return function (cnpj) {
           if (!cnpj) return;
            var text=cnpj;
            if(typeof cnpj!='string'){
                text=cnpj.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            
            text=textHelper.fillLeft(text,'0',14)
            return textHelper.format(text, "00.000.000/0000-00");

       }
    }]);

    
    app.filter('cnpjBase',['textHelper',function(textHelper) { 
       return function (cnpj) {
            var text=cnpj;
            if(typeof cnpj!='string'){
                text=cnpj.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            
            text=textHelper.fillLeft(text,'0',8)
            return textHelper.format(text, "00.000.000");

       }
    }]);
    
    
    app.filter('placa',['textHelper',function(textHelper) { 
       return function (text) {
            if(typeof text!='string' ){
                text=text.toString();
                textHelper.replaceAll(text,'',/ +/);
            }
            
            if(text.length==7)
                return textHelper.format(text, "000-0000");
            else if(text.length==6)
                return textHelper.format(text, "00-0000");
            else if(text.length==5)
                return textHelper.format(text, "00-000");
            else if(text.length==3)
                return textHelper.format(text, "000");
            
            return text;
            

       }
    }]);
    
    app.filter('renavam',['textHelper',function(textHelper) { 
       return function (text) {
            if(typeof text!='string' ){
                text=text.toString();
                textHelper.replaceAll(text,'',/\D/);
            }
            return text.substring(0,text.length-1)+'-'+text.substring(text.length-1,text.length);
       }
    }]);
    
    app.filter('ruc',['textHelper',function(textHelper) { 
       return function (text) {
          
           if(typeof text!='string'){
               text=text.toString();
               textHelper.replaceAll(text,'',/\D/);
           }
           
           var newText='';
           for(var i=0;i<text.length-1;i++){
              newText+=text[i];
           }
           newText+='-'+text[text.length-1]

           return newText;
       }
    }]);
    
    app.filter('mask',['textHelper',function(textHelper) { 
       return function (text,mask) {
           text=text.toString();
           return textHelper.format(text, mask);
       }
    }]);
    
    app.filter('gsm', function () {
        return function (tel) {
            if (tel == 'undefined' || tel == 'null') { return 'sem LINHA'; }
            if (!tel) { return 'Sem Nº Linha'; }

            var value = tel.toString().trim().replace(/^\+/, '');

            var retorno = "";
            if (value.length === 9) {
                retorno =
                    value[0] + value[1] + value[2] + value[3] + value[4] + " - " +
                    value[5] + value[6] + value[7] + value[8];

            }
            else if (value.length === 8) {
                retorno =
                    value[0] + value[1] + value[2] + value[3] + " - " +
                    value[4] + value[5] + value[6] + value[7];
            }
            else if (value.length === 0) {
                retorno = "sem LINHA";

            }
            else {
                retorno = "Nº Linha inválido"
            }
            return retorno;
        };
    });
    
    app.filter('millisparadata', function () {
        return function (millis) {
        	var date = new Date(millis);
        	
        	var ano = date.getFullYear();
        	var mes = date.getMonth() + 1;
        	var dia = date.getDate();
        	
        	if (mes < 10) {
        		mes = '0' + mes
        	}
        	
        	if (dia < 10) {
        		dia = '0' + dia;
        	}
        	
            return dia + '/' + mes + '/' + ano;
        };
    });
    
    app.filter('truncar', function () {
        return function (string, valor) {
        	if (!string) {
        		return '';
        	}
        	
        	string = string.replace('\n', ' ');
        	
        	if (string.length > valor) {
        		string = string.substring(0, valor)
        		string += ' ...';
        	}
            return string;
        };
    });

})();
