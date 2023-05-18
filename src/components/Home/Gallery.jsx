
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
      ];
  return (
    <>
    <div className="flex gap-12 my-24 justify-center items-center  py-4">
        <div className=" h-52 flex justify-center items-center text-gray-600 ">
            
            <div className="text-3xl font-bold px-16  text-purple-400 border-2 border-dotted  border-r-0 border-l-0 border-gray-400">
                 <h1>CHECK OUR GALLERY</h1>

                </div>
            
            </div>
        <div className="w-3/5">
    <ImageGallery items={images} />
    </div>

    </div>
    
    </>
    
  );
};

export default Gallery;
