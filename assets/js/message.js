let name,email,telephone,message,contactsArr=[],client={};function saveForms(){name=$("#nameInput").val(),email=$("#emailInput").val(),telephone=$("#telephoneInput").val(),message=$("#messageInput").val();let e,a,t,n,r=new Date;switch(n=r.getMinutes(),r.getMonth()){case 0:a="janvier";break;case 1:a="février";break;case 2:a="mars";break;case 3:a="avril";break;case 4:a="mai";break;case 5:a="juin";break;case 6:a="juillet";break;case 7:a="aôut";break;case 8:a="septembre";break;case 9:a="octobre";break;case 10:a="novembre";break;case 11:a="décembre"}switch(t=r.getMinutes()<10?r.getHours()+"h0"+r.getMinutes():r.getHours()+"h"+r.getMinutes(),r.getDay()){case 0:e="dimanche "+r.getDate()+" "+a+" à "+t;break;case 1:e="lundi "+r.getDate()+" "+a+" à "+t;break;case 2:e="mardi "+r.getDate()+" "+a+" à "+t;break;case 3:e="mercredi "+r.getDate()+" "+a+" à "+t;break;case 4:e="jeudi "+r.getDate()+" "+a+" à "+t;break;case 5:e="vendredi "+r.getDate()+" "+a+" à "+t;break;case 6:e="samedi "+r.getDate()+" "+a+" à "+t}client={name:name,email:email,telephone:telephone,message:message,jour:e},contactsArr.push(client),firebase.database().ref("de4POIPssQP3Xlb7IRAaQsYndyE2/messageFormPortfolio/").set(contactsArr,function(e){e?$("#btn-error").text("une erreur est survenue, veuillez recommencer"):($("#btn-msg").fadeOut(300,()=>{$("#btn-valide").fadeIn(500),$("#btn-valide").prop("disabled",!0)}),$("#nameInput").val(""),$("#emailInput").val(""),$("#telephoneInput").val(""),$("#messageInput").val(""),$("input , textarea").css("background-color","rgba(66, 64, 64, 0.493)"))}),$("#preloader").hide()}function inputColor(){$("#nameInput").keyup(function(e){$("#nameInput").css("background","#2D2D2D"),8!=e.keyCode&&""!=$("#nameInput").val()||""==$("#nameInput").val()&&$("#nameInput").css("background-color","rgba(66, 64, 64, 0.493)")}),$("#emailInput").keyup(function(e){$("#emailInput").css("background","#2D2D2D"),8!=e.keyCode&&""!=$("#emailInput").val()||""==$("#emailInput").val()&&$("#emailInput").css("background-color","rgba(66, 64, 64, 0.493)")}),$("#messageInput").keyup(function(e){$("#messageInput").css("background","#2D2D2D"),8!=e.keyCode&&""!=$("#messageInput").val()||""==$("#messageInput").val()&&$("#messageInput").css("background-color","rgba(66, 64, 64, 0.493)")}),$("#telephoneInput").keyup(function(e){$("#telephoneInput").css("background","#2D2D2D"),8!=e.keyCode&&""!=$("#telephoneInput").val()||""==$("#telephoneInput").val()&&$("#telephoneInput").css("background-color","rgba(66, 64, 64, 0.493)")})}function getDatabase(){firebase.database().ref("de4POIPssQP3Xlb7IRAaQsYndyE2/messageFormPortfolio/").once("value").then(function(e){contactsArr=e.val()?e.val():[]}).catch(e=>{alert("Code :"+e.code+"\nMessage :"+e.message)})}function isTelephonePortable(){return!!$("#telephoneInput").val().match("^(06|07)[0-9]{8}$")}function isTelephoneFixe(){return!!$("#telephoneInput").val().match("^(01|02|03|04|05|08|09)[0-9]{8}$")}$(()=>{$("#btn-error").hide(),$("#btn-valide").hide(),getDatabase(),inputColor(),$("input , textarea").focus(()=>{$("#btn-valide").hide(),$("#btn-msg").fadeIn(100)}),$("#btn-msg").click(()=>{var e=$("#emailInput").val();""==$("#nameInput").val()||""==$("#telephoneInput").val()||""==$("#messageInput").val()||""==$("#emailInput").val()?$("#btn-msg").fadeOut(300,()=>{$("#btn-error").fadeIn(500),$("#btn-error").text("tous les champs sont obligatoires"),$("#btn-error").css("color","red")}):/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)?isTelephonePortable($("#telephone").val())||isTelephoneFixe($("#telephone").val())?($("#preloader").show(),saveForms()):$("#btn-msg").fadeOut(300,()=>{$("#btn-error").fadeIn(500),$("#btn-error").text("Votre numéro est invalide")}):isTelephonePortable($("#telephone").val())||isTelephoneFixe($("#telephone").val())?$("#btn-msg").fadeOut(300,()=>{$("#btn-error").fadeIn(500),$("#btn-error").text("Votre email est invalide")}):$("#btn-msg").fadeOut(300,()=>{$("#btn-error").fadeIn(500),$("#btn-error").text("Votre email et votre numéro sont invalides")})})});