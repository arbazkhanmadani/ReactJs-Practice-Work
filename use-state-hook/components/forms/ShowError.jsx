const ShowError = (ShowError)=>{

    return(
        <>
            {ShowError.length===0 && <h1>There's no data found</h1>}
        </>
    )
}

export default ShowError;