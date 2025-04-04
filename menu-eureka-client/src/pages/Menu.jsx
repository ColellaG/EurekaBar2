import { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.css'
import menuService from '../services/menuService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faChevronDown, faChevronUp, faCog } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        console.log('Iniciando carga de datos...');
        
        const categoriesData = await menuService.getCategories();
        console.log('Categorías cargadas (detalle):', 
          categoriesData.map(cat => ({
            id: cat.id,
            name: cat.name,
            type: typeof cat.id
          }))
        );
        
        const itemsData = await menuService.getMenuItems();
        console.log('Ítems cargados (detalle):', 
          itemsData.map(item => ({
            id: item.id,
            name: item.name,
            category: item.category,
            categoryType: typeof item.category
          }))
        );

        // Organizar los items por categoría
        const categoriesWithItems = categoriesData.map(category => {
          const categoryItems = itemsData.filter(item => {
            console.log(`Comparando: item.category (${typeof item.category}) = ${item.category} con category.id (${typeof category.id}) = ${category.id}`);
            return Number(item.category) === Number(category.id);
          });
          console.log(`Ítems para categoría ${category.name} (${category.id}):`, categoryItems);
          return {
            ...category,
            items: categoryItems
          };
        });

        console.log('Categorías con ítems:', categoriesWithItems);
        setCategories(categoriesWithItems);
        
        // Inicializar todas las categorías como cerradas
        const initialOpenState = {};
        categoriesWithItems.forEach(cat => {
          initialOpenState[cat.id] = false;
        });
        setOpenCategories(initialOpenState);
        
        setError(null);
      } catch (err) {
        console.error('Error detallado:', err);
        setError('Error al cargar el menú. Por favor, intente nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  if (loading) {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.loading}>
          <h2>Cargando menú...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.error}>
          <h2>{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.header}>
        <img src="/images/EurekaLogo.png" alt="Eureka Logo" className={styles.logo} />
        <h1 className={styles.menuTitle}>Nuestro Menú</h1>
      </div>
      {categories.map((category) => (
        <section key={category.id} className={styles.menuSection}>
          <button 
            className={styles.categoryButton}
            onClick={() => toggleCategory(category.id)}
          >
            <h2>{category.name}</h2>
            <FontAwesomeIcon 
              icon={openCategories[category.id] ? faChevronUp : faChevronDown} 
              className={styles.categoryIcon}
            />
          </button>
          {openCategories[category.id] && (
            <div className={styles.menuContent}>
              <div className={styles.menuItem}>
                <ul className={styles.menuList}>
                  {category.items.map((item) => (
                    <li key={item.id} className={styles.menuListItem}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <span className={styles.itemName}>{item.name}</span>
                          {item.description && (
                            <p className={styles.itemDescription}>{item.description}</p>
                          )}
                        </div>
                        <span className={styles.itemPrice}>
                          ${item.price.toLocaleString()}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      ))}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/eureka.cafe" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/5493812345678" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <p><FontAwesomeIcon icon={faPhone} /> +54 9 381 234-5678</p>
            <p className={styles.address}>Salas y Valdez 1021, T4000 Tucumán</p>
          </div>
        </div>
      </footer>
      <div className={styles.adminContainer}>
        <a 
          href="http://localhost:8000/admin/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.adminButton}
          title="Panel de Administración"
        >
          <FontAwesomeIcon icon={faCog} />
        </a>
      </div>
    </div>
  );
}

export default Menu 