const ComidaChina = () => {
    return (
        <div class="container">
  <div class="cuadro">
  <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>Dim Sum China</h3>
            <img className="laptopimg" src="./public/img/dim sum china.jpg" alt="laptop" />
            <p>El dim sum suele disfrutarse durante las horas del brunch y es habitual compartir una variedad de platos entre amigos y familiares</p>
            <p>Precio: 5</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Fried Rice</h3>
            <img className="laptopimg" src="./public/img/Fried Rice china.jpg" alt="laptop" />
            <p>El arroz frito es muy adaptable y te permite utilizar cualquier ingrediente que tengas a mano.</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Chow mein china</h3>
            <img className="laptopimg" src="./public/img/chow Mein china.jpg" alt="laptop" />
            <p>Chow mein es un plato clásico de la cocina china, especialmente popular en la región de Cantón.</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
</div>
</div>
    );
};

export default ComidaChina;
