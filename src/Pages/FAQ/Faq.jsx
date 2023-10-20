

const Faq = () => {
    return (
        <div className="p-5 my-10">
        <h2 className="text-center text-4xl font-semibold mb-10">#FAQ</h2>
            <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Are the products on your website authentic and brand-certified?
  </div>
  <div className="collapse-content"> 
    <p>Yes, all the products available on our website are 100% authentic and brand-certified. We source our products directly from authorized distributors and manufacturers, including Sony, Google, Apple, Samsung, Asus, Intel, and many other reputable brands. This ensures that you are getting genuine, high-quality products with warranties and customer support backed by the respective brands.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  What is your shipping and delivery process?
  </div>
  <div className="collapse-content"> 
    <p>We take pride in our efficient and reliable shipping and delivery process. After you place an order, our team works diligently to process and package your items. Shipping times may vary depending on your location, but we offer various shipping options, including standard and expedited delivery, so you can choose the one that best suits your needs. We provide tracking information for your order, so you can monitor its progress and expect timely delivery.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return and refund policy?
  </div>
  <div className="collapse-content"> 
    <p>We understand that sometimes, a product may not meet your expectations. If you are not satisfied with your purchase, we have a hassle-free return and refund policy. You can initiate a return within 30 days of receiving your product, and we all provide you with instructions on how to send it back. Once we receive the returned item and confirm its condition, we will process a refund or offer a replacement, depending on your preference. Please refer to our  Return Policy page for more details on the process and any applicable terms and conditions</p>
  </div>
</div>
        </div>
    );
};

export default Faq;