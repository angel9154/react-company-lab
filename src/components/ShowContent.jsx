const ShowContent = () => {
    const renderComponent = () => {
        if (navItem === "home") {
          return <Home />;
        } 
        if (navItem === "history") {
          return <History />;
        } 
        if (navItem === "past work") {
          return <PastWork />;
        } 
        if (navItem === "staff") {
          return <Staff />;
        } 
        if (navItem === "contact us") {
          return <ContactUs />;
        } 
        
      };
    return (

    )
}