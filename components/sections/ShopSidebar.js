import Link from "next/link";
import PortfolioFilter2 from "@/components/elements/PortfolioFilter2";
import ReactSlider from 'react-slider';

  const ShopSidebar= () => {
  return (
    <section className="featured-products">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="shop-sidebar">
                        <div className="sidebar-search">
                            <form action="shop-productsclassName=" method="post" className="search-form">
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="Search..." required="" />
                                    <button><i className="lnr lnr-icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="sidebar-widget category-widget">
                            <div className="widget-title">
                                <h5 className="widget-title">Categories</h5>
                            </div>
                            <div className="widget-content">
                                <ul className="category-list clearfix">
                                    <li><Link href="shop-product-detailsclassName=">Cloud Solution</Link></li>
                                    <li><Link href="shop-product-detailsclassName=">Cyber Data</Link></li>
                                    <li><Link href="shop-product-detailsclassName=">SEO Marketing</Link></li>
                                    <li><Link href="shop-product-detailsclassName=">UI/UX Design</Link></li>
                                    <li><Link href="shop-product-detailsclassName=">Web Development</Link></li>
                                    <li><Link href="shop-product-detailsclassName=">Artifical Intelligence</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget price-filters">
                          <div className="widget-title">
                            <h5 className="widget-title">Filter by Price</h5>
                          </div>
                            <div className="range-slider clearfix">
                              <div className="mt-40 clearfix">
                                <ReactSlider
                                  className="horizontal-slider mb50 mt20"
                                  thumbClassName="example-thumb"
                                  trackClassName="example-track"
                                  defaultValue={[0, 45, 100]}
                                  ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                  pearling
                                  minDistance={1}
                                />
                                <input className="mt-40" type="submit" value="Filter" />
                              </div>
                            </div>
                        </div>
                        <div className="sidebar-widget post-widget">
                            <div className="widget-title">
                                <h5 className="widget-title">Popular Products</h5>
                            </div>
                            <div className="post-inner">
                                <div className="post">
                                    <figure className="post-thumb"><Link href="shop-detailsclassName="><img src="images/resource/products/thumb-1.jpg" alt="" /></Link></figure>
                                    <Link href="shop-product-detailsclassName=">Best Headset</Link>
                                    <span className="price">$45.00</span>
                                </div>
                                <div className="post">
                                    <figure className="post-thumb"><Link href="shop-detailsclassName="><img src="images/resource/products/thumb-2.jpg" alt="" /></Link></figure>
                                    <Link href="shop-product-detailsclassName=">Quality Battery</Link>
                                    <span className="price">$34.00</span>
                                </div>
                                <div className="post">
                                    <figure className="post-thumb"><Link href="shop-detailsclassName="><img src="images/resource/products/thumb-3.jpg" alt="" /></Link></figure>
                                    <Link href="shop-product-detailsclassName=">Smart Watch</Link>
                                    <span className="price">$29.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          <div className="col-lg-9 col-md-12 col-sm-12 content-side mt-md-60">
            <div className="mixitup-gallery">
            <PortfolioFilter2 /> 
            </div>
        </div>
            </div>
        </div>
    </section>
  );
};

export default ShopSidebar;
