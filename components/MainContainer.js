import A from "./A";

const MainContainer = ({children, keywords}) => {
    return (
       <>
           <head>
               <meta keywords={'Next js приложение' + keywords} />
               <title>Главная страница</title>
           </head>
           <div className='navbar'>
               <A href={'/'} text="Главная"/>
               <A href={'/users'} text="Пользователи"/>
           </div>
           <div>
               {children}
           </div>

           <style jsx>
               {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                  
                  .link {
                  text-decoration: none;
                  color: white;
                  font-size: 20px;
                  margin: 10px;
                  }
                `}
           </style>
       </>
    );
};

export default MainContainer;