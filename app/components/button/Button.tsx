
type Props={
  text:string,
  onclick:()=>void
}

 const Button = ({text,onclick}:Props)=>{
return (

  <>
    <button className="btn  hover:bg-[#caf06c] bg-[#a7d72e] border-none  text-white" 
  onClick={onclick}
  >{text}</button>
  </>
)

 }

export default Button;
