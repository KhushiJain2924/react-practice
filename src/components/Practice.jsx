function Practice(){
  return(
   <>
   <h1>Profile Card Challenge</h1>
   <ProfileCard
   name = "Khushi"
   age={20}
   greeting={
     <div>
       <strong>Hey! Khushi this side!</strong>
     </div>
   }
   >
     <p>Hobbies: Reading, Hiking</p>
     <button>Contact Me</button>
   </ProfileCard>
 
 <ProfileCard
 name = "Jashan"
 age={24}
 greeting={
   <div>
     <strong>Hey! Jashan this side!</strong>
   </div>
 }
 >
   <p>Hobbies: Dancing, Hiking</p>
   <button>Contact Me</button>
 </ProfileCard>
 </>
  );
 }

 function ProfileCard(props){
  const {name,age,greeting,children} = props;
  return(
    <>
    <h2>Name:{name}</h2>
    <p>Age: {age}</p>
    <p>{greeting}</p>
    <div>{children}</div>
    </>
  )
 }
 export default Practice;