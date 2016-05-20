    if ( !noGlobal ) {
        window.Nuclear&&window.Nuclear.instances||(window.Nuclear=Nuclear);
    }

    return Nuclear;
}));