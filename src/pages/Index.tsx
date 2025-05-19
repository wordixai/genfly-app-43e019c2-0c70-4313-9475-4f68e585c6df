import { Coffee, Croissant, Sandwich, Clock, MapPin } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich and aromatic single shot of espresso",
      price: "$3.50",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      name: "Avocado Toast",
      description: "Sourdough bread with smashed avocado and cherry tomatoes",
      price: "$8.50",
      icon: <Sandwich className="w-6 h-6" />
    },
    {
      name: "Almond Croissant",
      description: "Flaky pastry with almond cream filling",
      price: "$4.50",
      icon: <Croissant className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4 font-serif">Brew & Bites</h1>
            <p className="text-xl mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-serif">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2015, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
            We source our beans from sustainable farms and bake all our pastries fresh daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Coffee className="w-10 h-10 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Specialty Coffee</h3>
            <p className="text-gray-600">
              Single-origin beans roasted in-house for maximum freshness and flavor.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Croissant className="w-10 h-10 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Fresh Pastries</h3>
            <p className="text-gray-600">
              Baked fresh every morning using traditional techniques and local ingredients.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Sandwich className="w-10 h-10 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2">Healthy Options</h3>
            <p className="text-gray-600">
              Vegan and gluten-free options available for all dietary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center font-serif">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-amber-700 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-serif">Visit Us</h2>
            <div className="flex items-start mb-6">
              <MapPin className="w-6 h-6 mr-4 mt-1 text-amber-700" />
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-gray-600">123 Coffee Street, Downtown</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 mr-4 mt-1 text-amber-700" />
              <div>
                <h3 className="text-lg font-bold mb-1">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 7am - 7pm</p>
                <p className="text-gray-600">Saturday - Sunday: 8am - 6pm</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;