$(document).ready(function(){
    // Cargamos los estados
    var estados = "<option value='' disabled selected>Seleccione el Estado</option>";

    for (var key in municipios) {
        if (municipios.hasOwnProperty(key)) {
            estados = estados + "<option value='" + key + "'>" + key + "</option>";
        }
    }

    $('#estadoReg').html(estados);

    // Al detectar
    $( "#estadoReg" ).change(function() {
        var html = "<option value='' disabled selected>Seleccione el Municipio</option>";
        $( "#estadoReg option:selected" ).each(function() {
            var estado = $(this).text();
            if(estado != "Selecciona el estado"){
                var municipio = 0;
                if(municipios[estado]){
                    municipio = municipios[estado];

                    for (var i = 0; i < municipio.length; i++)
                        html += "<option value='" + municipio[i] + "'>" + municipio[i] + "</option>";
                    }    
                }
                
        });
        $('#municipioReg').html(html);
        // $('select').material_select('update');
    })
    .trigger( "change" );
});