Draw.loadPlugin(function(ui) {
    // Define the Boxology stencil library
    var boxologyStencil = `
    <mxlibrary>
        [
            {"title":"Symbol","data":"<shape name='symbol' aspect='fixed'><rect x='10' y='10' width='80' height='40' strokeWidth='2'/></shape>"},
            {"title":"Generate: Train","data":"<shape name='generate_train' aspect='fixed'><ellipse x='10' y='10' width='80' height='40' strokeWidth='2'/></shape>"},
            {"title":"Model","data":"<shape name='model' aspect='fixed'><polygon x='10' y='10' width='80' height='40' strokeWidth='2' points='0 0, 80 20, 80 40, 0 40'/></shape>"},
            {"title":"Transform","data":"<shape name='transform' aspect='fixed'><ellipse x='10' y='10' width='80' height='40' strokeWidth='2'/></shape>"},
            {"title":"Actor","data":"<shape name='actor' aspect='fixed'><polygon x='10' y='10' width='80' height='40' strokeWidth='2' points='40 0, 80 40, 0 40'/></shape>"}
        ]
    </mxlibrary>`;

    // Parse and add custom stencil palette
    mxResources.parse('boxology=Boxology Patterns');
    Sidebar.prototype.addBoxologyPalette = function() {
        var s = boxologyStencil;
        this.addStencilPalette('boxology', 'Boxology', s);
    };

    // Register the Boxology Palette in the sidebar
    ui.sidebar.addBoxologyPalette();

    // Display confirmation in console
    console.log('Boxology plugin loaded successfully!');
});
