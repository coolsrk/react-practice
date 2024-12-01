import React from 'react'

export const Card = (props) => {
  return (
    <>
        {/** This would print everything
         * which was send in between opening and closing tags 
         * of Card component
         * 
         * <Card>
         * ...  -> This would be printed, this is children
         * </Card>
         */}
        {props.children} 
    </>
  );
}

export default Card;
