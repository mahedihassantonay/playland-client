
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const Gallery = () => {
    const images = [
        {
          original: 'https://images.unsplash.com/photo-1604883781245-0aca44fff711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          thumbnail: 'https://images.unsplash.com/photo-1604883781245-0aca44fff711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
        {
          original: 'https://images.unsplash.com/photo-1638400938049-306a22d88db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
          thumbnail: 'https://images.unsplash.com/photo-1638400938049-306a22d88db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
        },
        {
          original: 'https://images.unsplash.com/photo-1613750651512-d65ce96dff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          thumbnail: 'https://images.unsplash.com/photo-1613750651512-d65ce96dff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          original: 'https://images.unsplash.com/photo-1558335101-cf872fa02538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          thumbnail: 'https://images.unsplash.com/photo-1558335101-cf872fa02538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
        {
          original: 'https://images.unsplash.com/photo-1558679928-be7e02981a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          thumbnail: 'https://images.unsplash.com/photo-1558679928-be7e02981a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
      ];
  return (
    <>
    <div className=" my-24   py-4">
        
            
            <div className="text-3xl font-bold p-2   border border-gray-600 border-dashed md:w-4/5 rounded-lg text-center mx-auto">
                 <h1>CHECK OUR GALLERY</h1>

                </div>
            
            
        <div className="md:w-4/5 mx-auto my-8">
    <ImageGallery items={images} />
    </div>

    </div>
    
    </>
    
  );
};

export default Gallery;
