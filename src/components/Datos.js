import react from 'react'

export default function Datos() {
  return (
    <>
    <h3 className='titulo'>Datos personales</h3>
    <div className='data_Frame'>
        <div className='data_L'>
            Nombre :
        </div>
        <div className='data_R'>
            Luis Humberto Toledo Hernandez
        </div>    
    </div>

    <div className='data_Frame'>
        <div className='data_L'>
            Rut :
        </div>
        <div className='data_R'>
            18.095.373-6
        </div>    
    </div>

    <div className='data_Frame'>
        <div className='data_L'>
            f. Nac :
        </div>
        <div className='data_R'>
            18, enero, 1992
        </div>    
    </div>

    <div className='data_Frame'>
        <div className='data_L'>
            Telefono :
        </div>
        <div className='data_R'>
            <a href='http://wa.me/56955322377'>+569 55322377</a>
        </div>    
    </div>

    <div className='data_Frame'>
        <div className='data_L'>
            Direccion :
        </div>
        <div className='data_R'>
            Flavio Torres #927
        </div>    
    </div>

    <div className='data_Frame'>
        <div className='data_L'>
            Correo :
        </div>
        <div className='data_R'>
            luistoledo@lhth.cl
        </div>    
    </div>
    </>

  )
}
