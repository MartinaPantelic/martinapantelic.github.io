        $(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['firstPage', 'secondPage', '3rdPage','5thPage','7thPage','8thPage','9thPage'],
                navigation: true,
                navigationPosition: 'right',
                menu: '#menu',
            continuousVertical: true
            });
        });