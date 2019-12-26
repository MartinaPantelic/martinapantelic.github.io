        $(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage','6thPage','7thPage'],
                navigation: true,
                navigationPosition: 'right',
                menu: '#menu',
            continuousVertical: true
            });
        });