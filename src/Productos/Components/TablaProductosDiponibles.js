import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
        id : "SP001",
        marca : "Speedo",
        title: "Vestido de baño",
        description: "Vestido de baño de competencias natacion azul para dama",
        price: 225000,
        category: "Enterizo",
        url:"https://http2.mlstatic.com/D_NQ_NP_911079-MCO31665772433_082019-V.jpg", 
    },
    {
        id: "SP002",
        marca : "Speedo",
        title: "Vestido de baño",
        description: "Vestido de baño de informal para dama",
        price: 210000,
        category: "Dos piezas",
        url: "https://i.pinimg.com/736x/3f/de/0a/3fde0a5cba570dd10d796e93e20cf7ee.jpg",
    },
    {
        id: "SP003",
        marca : "Speedo",
        title: "Vestido de baño",
        description: "Vestido de baño de competencias volleyball playa para dama",
        price: 280000,
        category: "Dos piezas",
        url: "https://i.pinimg.com/originals/17/0a/26/170a262d90289453cb5254e3779c9174.jpg",
    },
    {
        id: "SP004",
        marca : "Speedo",
        title: "Vestido de baño",
        description: "Vestido de baño de competencias natacion para dama",
        price: 250000,
        category: "Enterizo",
        url: "https://www.swiminn.com/f/13745/137451841/speedo-banador-splice-espalda-muscle.jpg",
    },
    {
        id: "SP005",
        marca : "Speedo",
        title: "Vestido de baño",
        description: "Vestido de baño de competencias natacion estampado para dama",
        price: 290000,
        category: "Enterizo",
        url: "https://www.diffusionsport.com/wp-content/uploads/2021/02/speedo-trajes-bano-mujer.jpg",
    },
    
    {
        id: "AR001",
        marca : "Arena",
        title: "Gafas de baño",
        description: "Gafas azules para competencias de natacion",
        price: 112000,
        category: "Adulto",
        url: "https://i.linio.com/p/6aae263741cb4ea38eb6b14a63722c09-product.jpg",
    },
    {
        id: "AR002",
        marca : "Arena",
        title: "Gafas de baño",
        description: "Gafas naranjas para competencias de natacion",
        price: 150000,
        category: "Adulto",
        url: "https://www.swiminn.com/f/13733/137332340/arena-gafas-natacion-cobra-ultra-swipe-espejo.jpg",
    },
    {
        id: "AR003",
        marca : "Arena",
        title: "Gafas de baño",
        description: "Gafas rosa y verde de playa",
        price: 130000,
        category: "Niño",
        url: "https://sportpool.es/wp-content/uploads/2019/03/arena-tracks-mirror-min.jpg",
    },
    {
        id: "AR004",
        marca : "Arena",
        title: "Gafas de baño",
        description: "Gafas azules de playa",
        price: 137000,
        category: "Niño",
        url: "https://images.bike24.net/i/mb/d3/41/fe/arena-the-one-mask-jr-junior-swimming-goggles-blue-blue-red-1-977459.jpg",
    },
    {
        id: "AR005",
        marca : "Arena",
        title: "Gafas de baño",
        description: "Gafas negras para piscina",
        price: 98000,
        category: "Adulto",
        url: "https://m.media-amazon.com/images/I/51m1FJY1KTL._AC_SL1279_.jpg",
    },
   
    {
        id: "AD001",
        marca : "Adidas",
        title: "Gorro de baño",
        description: "Gorro negro siliconado para natacion ",
        price: 50000,
        category: "Silicona",
        url: "https://m.media-amazon.com/images/I/51LQFZFY2kL._AC_UX466_.jpg",
    },
    {
        id: "AD002",
        marca : "Adidas",
        title: "Gorro de baño",
        description: "Gorro azul siliconado para natacion ",
        price: 65000,
        category: "Silicona",
        url: "https://i.pinimg.com/originals/69/b2/61/69b261fcc307676e467c8be0284a408d.jpg",
    },
    {
        id: "AD003",
        marca : "Adidas",
        title: "Gorro de baño",
        description: "Gorro rojo de tela para natacion ",
        price: 45000,
        category: "Tela",
        url: "https://d24t9mem9wyce.cloudfront.net/494665-thickbox_default/gorro-adidas-natacion-kid.jpg",
    },
    {
        id: "AD004",
        marca : "Adidas",
        title: "Gorro de baño",
        description: "Gorro naranja siliconado para natacion ",
        price: 85000,
        category: "Silicona",
        url: "https://t-static.dafiti.com.br/irEIWiSKc79yFatxDCk8QivuHHs=/552x700/smart/filters:quality(90)/static.dafiti.com.co/p/adidas-6635-0660751-1-product.jpg",
    },
    {
        id: "AD005",
        marca : "Adidas",
        title: "Gorro de baño",
        description: "Gorro azul de tela para natacion ",
        price: 40000,
        category: "Tela",
        url: "https://www.ofertadeportes.com/71352-large_default/gorro-natacion-adidas-nino-infinitex-cap-1pc-m66934.jpg",
    },
    
];


  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;