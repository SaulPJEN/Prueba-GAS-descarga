function CrearDocumento() {
  
  var doc = DocumentApp.create('Primer Documento creado con GAS');

  doc.getBody().appendParagraph('ESCRITO DESDE Googe App Script');

}

function AbrirDocumento(){

  var documento = DocumentApp.openById('1Ngyb3JqJz532TypxTLXM0G08BqaqUbjiAP7NDakaAak');
  documento.getBody().appendParagraph('Párrafo añadido con Google App Script');

}

function ModificarFormatos(){

  var documento = DocumentApp.openById('1Ngyb3JqJz532TypxTLXM0G08BqaqUbjiAP7NDakaAak');
  var parrafos = documento.getBody().getParagraphs();

  parrafos[0].setText('Párrafo actualizacon con Google App Script');
  parrafos[0].setLeftToRight(false);

  var estilo1={};

  estilo1[DocumentApp.Attribute.BACKGROUND_COLOR]='#ecfaff';
  estilo1[DocumentApp.Attribute.FONT_SIZE] = 24
  
  parrafos[2].setAttributes(estilo1);
}
