
let navBar = document.querySelector( '#nav' ); // Manejando todos los elementos dentro de nav
    navBar.addEventListener( 'mouseover', (  ) => { // Evento para hacer zoom en la barra de navegacion al colocar el mouse en la barra
        navBar.style.transform = 'scale(1.1)';
        navBar.style.transition = 'transform 0.3s ease';
    } );

    navBar.addEventListener( 'mouseout', (  ) => { // Evento para salir que el zoom vuleva al estado normal al quirtar el mouse
        navBar.style.transform = 'scale(1)';
    } );

let main = document.querySelectorAll( 'a' );

for ( let i = 0; i < main.length; i++ ) {
    
    main[i].addEventListener( 'click', ( event ) => {
        
        let href = event.target.getAttribute('href');
        let elementSelected = document.querySelector( href );
        
        elementSelected.style.transform = 'scale( 1.1 )'
        elementSelected.style.transition = 'transform 0.3s ease';
        
        setTimeout( () => {
            elementSelected.style.transform = 'scale( 1 )';
        }, 300 );
    } );

};

let burguerBtn = document.querySelector( '.menu-toggle' ),
    listNav = document.querySelector( '#nav-list' );

    burguerBtn.addEventListener( 'click', ( event ) => {
        listNav.style.display = listNav.style.display === 'flex' ? 'none' : 'flex';
        event.preventDefault();
    } );

    let a = document.querySelectorAll( 'a' );
    
    for ( let i = 0; i < a.length; i++ ) {
        
        a[i].addEventListener( 'click', ( event ) => {
            let href = event.target.getAttribute( 'href' );
            let element = document.querySelector( href );

            if ( window.innerWidth <= 768 ) {
            listNav.style.display = listNav.style.display = 'none';
            };
        } );
    };

    window.addEventListener( 'resize', (  ) => {
        if ( window.innerWidth > 768 ) {
            listNav.style.display = 'flex';
        }
    } );