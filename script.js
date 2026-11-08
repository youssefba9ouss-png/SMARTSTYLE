'use strict';
/* ================= CONFIG ================= */
const CFG = {
  WA: '212665202695',                       // WhatsApp (do not change)
  PRE: 'Salam SMARTSTYLE, bghit nswel 3la had produit...',
  IG_USER: 'smart.style',
  IG_TOKEN: '',                              // <- paste Instagram Graph API long-lived token here (see README)
  ADMIN_HASH: 'ec407e3797cf841d50c166b15446bcd8e87e3df6c1f341749a535ff7bec156ad' // SHA-256("youssef:Youssef@Smart2026")
};

/* ================= I18N ================= */
const T = {
fr:{nav1:'Collection',nav2:'Pourquoi nous',nav3:'Instagram',nav4:'Avis',nav5:'Commander',hero_k:'Tanger · Maroc',hero_t:'Où le confort rencontre le luxe',hero_s:'Des meubles d’exception, livrés chez vous. Livraison gratuite à Tanger, rapide partout au Maroc.',hero_b:'Découvrir la collection',shop_t:'Nos best-sellers',ph:'Rechercher un produit…',c_all:'Toutes catégories',c_chairs:'Chaises',c_tables:'Tables',c_sofas:'Canapés',pr_all:'Tous les prix',pr_1:'Moins de 2 500 DH',pr_2:'2 500 – 5 000 DH',pr_3:'Plus de 5 000 DH',so_def:'Trier par',so_asc:'Prix croissant',so_desc:'Prix décroissant',none:'Aucun produit trouvé',ord:'Commander',oos:'Rupture',cat_chairs:'Chaises',cat_tables:'Tables',cat_sofas:'Canapés',why_t:'Pourquoi SMARTSTYLE',w1t:'Qualité premium',w1d:'Matériaux nobles et finitions soignées, pensés pour durer.',w2t:'Livraison rapide',w2d:'Gratuite à Tanger, rapide partout au Maroc.',w3t:'Service client',w3d:'Réponse rapide et conseils personnalisés sur WhatsApp.',ig_t:'De notre Instagram',ig_b:'Suivre @smart.style',rev_t:'Ils nous font confiance',or_t:'Commander maintenant',f_name:'Nom complet',f_phone:'Téléphone',f_city:'Ville',f_prod:'Produit',f_qty:'Quantité',f_send:'Commander via WhatsApp',f_ok:'Commande enregistrée ! Ouverture de WhatsApp…',f_err:'Veuillez remplir correctement tous les champs.',slogan:'Where Comfort Meets Luxury',ft_d:'Meubles de luxe à Tanger. Livraison gratuite à Tanger, rapide partout au Maroc.',ft_r:'Tous droits réservés.',msg:'Bonjour SMARTSTYLE, je souhaite commander',t_title:'SMARTSTYLE | Meubles de luxe à Tanger, Maroc'},
en:{nav1:'Collection',nav2:'Why us',nav3:'Instagram',nav4:'Reviews',nav5:'Order',hero_k:'Tangier · Morocco',hero_t:'Where Comfort Meets Luxury',hero_s:'Exceptional furniture, delivered to your door. Free delivery in Tangier, fast delivery all over Morocco.',hero_b:'Explore the collection',shop_t:'Our best sellers',ph:'Search a product…',c_all:'All categories',c_chairs:'Chairs',c_tables:'Tables',c_sofas:'Sofas',pr_all:'All prices',pr_1:'Under 2,500 DH',pr_2:'2,500 – 5,000 DH',pr_3:'Over 5,000 DH',so_def:'Sort by',so_asc:'Price: low to high',so_desc:'Price: high to low',none:'No product found',ord:'Order',oos:'Sold out',cat_chairs:'Chairs',cat_tables:'Tables',cat_sofas:'Sofas',why_t:'Why SMARTSTYLE',w1t:'Premium quality',w1d:'Noble materials and refined finishes, made to last.',w2t:'Fast delivery',w2d:'Free in Tangier, fast all over Morocco.',w3t:'Customer care',w3d:'Quick replies and personal advice on WhatsApp.',ig_t:'From our Instagram',ig_b:'Follow @smart.style',rev_t:'What our customers say',or_t:'Order now',f_name:'Full name',f_phone:'Phone',f_city:'City',f_prod:'Product',f_qty:'Quantity',f_send:'Order via WhatsApp',f_ok:'Order saved! Opening WhatsApp…',f_err:'Please fill in all fields correctly.',slogan:'Where Comfort Meets Luxury',ft_d:'Luxury furniture in Tangier. Free delivery in Tangier, fast all over Morocco.',ft_r:'All rights reserved.',msg:'Hello SMARTSTYLE, I would like to order',t_title:'SMARTSTYLE | Luxury furniture in Tangier, Morocco'},
ar:{nav1:'المجموعة',nav2:'علاش نحن',nav3:'انستغرام',nav4:'آراء',nav5:'اطلب',hero_k:'طنجة · المغرب',hero_t:'حيث الراحة تلتقي بالفخامة',hero_s:'أثاث استثنائي يصلك حتى باب الدار. توصيل مجاني في طنجة وسريع لجميع أنحاء المغرب.',hero_b:'اكتشف المجموعة',shop_t:'الأكثر مبيعاً',ph:'ابحث عن منتج…',c_all:'كل الفئات',c_chairs:'كراسي',c_tables:'طاولات',c_sofas:'أرائك',pr_all:'كل الأسعار',pr_1:'أقل من 2500 درهم',pr_2:'2500 – 5000 درهم',pr_3:'أكثر من 5000 درهم',so_def:'ترتيب حسب',so_asc:'السعر: الأقل أولاً',so_desc:'السعر: الأعلى أولاً',none:'لم يتم العثور على منتج',ord:'اطلب',oos:'نفد',cat_chairs:'كراسي',cat_tables:'طاولات',cat_sofas:'أرائك',why_t:'علاش SMARTSTYLE',w1t:'جودة عالية',w1d:'مواد فاخرة ولمسات نهائية متقنة، مصنوعة لتدوم.',w2t:'توصيل سريع',w2d:'مجاني في طنجة وسريع في كل المغرب.',w3t:'خدمة الزبناء',w3d:'جواب سريع ونصائح شخصية عبر واتساب.',ig_t:'من انستغرام ديالنا',ig_b:'تابعنا @smart.style',rev_t:'آراء زبنائنا',or_t:'اطلب الآن',f_name:'الاسم الكامل',f_phone:'رقم الهاتف',f_city:'المدينة',f_prod:'المنتج',f_qty:'الكمية',f_send:'اطلب عبر واتساب',f_ok:'تم حفظ الطلب! جاري فتح واتساب…',f_err:'المرجو ملء جميع الحقول بشكل صحيح.',slogan:'حيث الراحة تلتقي بالفخامة',ft_d:'أثاث فاخر في طنجة. توصيل مجاني في طنجة وسريع في كل المغرب.',ft_r:'جميع الحقوق محفوظة.',msg:'السلام SMARTSTYLE، بغيت نطلب',t_title:'SMARTSTYLE | أثاث فاخر في طنجة، المغرب'}
};

/* ================= DEFAULT DATA ================= */
const SEED = [
{id:1,cat:'chairs',price:1490,stock:20,img:'',n:{fr:'Chaise de salle à manger en velours',en:'Velvet Dining Chair',ar:'كرسي سفرة مخمل'},d:{fr:'Assise en velours doux, pieds dorés, élégance intemporelle.',en:'Soft velvet seat with gold legs and timeless elegance.',ar:'مقعد مخمل ناعم بأرجل ذهبية وأناقة خالدة.'}},
{id:2,cat:'tables',price:2900,stock:12,img:'',n:{fr:'Table basse en marbre',en:'Marble Coffee Table',ar:'طاولة قهوة رخام'},d:{fr:'Plateau en marbre véritable, structure métal doré.',en:'Genuine marble top on a gold metal frame.',ar:'سطح رخام حقيقي مع هيكل معدني ذهبي.'}},
{id:3,cat:'sofas',price:8900,stock:6,img:'',n:{fr:'Canapé bouclé crème',en:'Bouclé Sofa Cream',ar:'أريكة بوكليه كريم'},d:{fr:'Tissu bouclé cosy, lignes arrondies, confort absolu.',en:'Cozy bouclé fabric, rounded lines, total comfort.',ar:'قماش بوكليه مريح وخطوط دائرية وراحة تامة.'}},
{id:4,cat:'chairs',price:2200,stock:15,img:'',n:{fr:'Chaise de bureau de luxe',en:'Luxury Office Chair',ar:'كرسي مكتب فاخر'},d:{fr:'Ergonomique, cuir premium, réglable pour de longues journées.',en:'Ergonomic premium leather, adjustable for long days.',ar:'مريح وجلد فاخر وقابل للتعديل لساعات طويلة.'}},
{id:5,cat:'tables',price:6500,stock:8,img:'',n:{fr:'Ensemble table à manger moderne',en:'Modern Dining Table Set',ar:'طقم طاولة سفرة عصري'},d:{fr:'Table et chaises au design moderne pour vos repas en famille.',en:'Modern table and chairs for family dining.',ar:'طاولة وكراسي بتصميم عصري للوجبات العائلية.'}},
{id:6,cat:'sofas',price:3400,stock:10,img:'',n:{fr:'Fauteuil modulable',en:'Modular Armchair',ar:'فوتيل مودولار'},d:{fr:'Modulable selon vos envies, assise profonde et généreuse.',en:'Reconfigurable to your taste, deep generous seat.',ar:'قابل للتركيب حسب ذوقك مع مقعد عميق ومريح.'}}];
const TEST = [
{id:1,name:'Salma',city:{fr:'Tanger',en:'Tangier',ar:'طنجة'},t:{fr:'Qualité incroyable, mon salon fait vraiment luxe.',en:'Amazing quality, my living room now looks so luxurious.',ar:'جودة رائعة، الصالون ديالي بان فخم بزاف.'}},
{id:2,name:'Youssef',city:{fr:'Casablanca',en:'Casablanca',ar:'الدار البيضاء'},t:{fr:'Service rapide, livré en 2 jours.',en:'Fast service, delivered in 2 days.',ar:'خدمة سريعة، وصلني فيومين.'}},
{id:3,name:'Imane',city:{fr:'Rabat',en:'Rabat',ar:'الرباط'},t:{fr:'La meilleure boutique de meubles du Maroc.',en:'Best furniture shop in Morocco.',ar:'أحسن محل أثاث في المغرب.'}}];

/* ================= STATE / HELPERS ================= */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LS={g:(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}},s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{alert('Storage full: use smaller images.')}}};
let P=LS.g('ss_p',SEED), O=LS.g('ss_o',[]), R=LS.g('ss_t',TEST), I=LS.g('ss_i',[]), L=LS.g('ss_l','fr');
const save=()=>{LS.s('ss_p',P);LS.s('ss_o',O);LS.s('ss_t',R);LS.s('ss_i',I)};
const tr=k=>(T[L]&&T[L][k])||T.fr[k]||k;
const nm=p=>p.n[L]||p.n.fr, ds=p=>(p.d&&(p.d[L]||p.d.fr))||'';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Number(n).toLocaleString('en-US').replace(/,/g,' ')+' DH';
const wa=t=>`https://wa.me/${CFG.WA}?text=${encodeURIComponent(t)}`;
const ph=p=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3ebdc"/><stop offset="1" stop-color="#cdb99a"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><rect x="40" y="40" width="520" height="520" fill="none" stroke="#b8923a" stroke-width="2"/><text x="300" y="305" font-family="Georgia,serif" font-size="32" text-anchor="middle" fill="#16130f" opacity=".65">${esc(p.n.en)}</text></svg>`);
const img=p=>esc(p.img||ph(p));

/* ================= PUBLIC SITE ================= */
const card=p=>`<article class="card rv"><button class="im" data-qv="${p.id}" aria-label="${esc(nm(p))}"><img loading="lazy" decoding="async" width="400" height="400" src="${img(p)}" alt="${esc(nm(p))}">${p.stock<1?`<i class="oos">${tr('oos')}</i>`:''}</button><h3 class="tx">${esc(nm(p))}</h3><div class="pr">${fmt(p.price)}</div><div class="btns"><button class="b dk" data-ord="${p.id}" ${p.stock<1?'disabled':''}>${tr('ord')}</button><a class="b wa" target="_blank" rel="noopener" href="${wa(CFG.PRE+' '+nm(p))}">WhatsApp</a></div></article>`;

function shop(){
  const q=$('#q').value.trim().toLowerCase(),c=$('#cat').value,pr=$('#prc').value,so=$('#sort').value;
  const a=P.filter(p=>(!q||Object.values(p.n).join(' ').toLowerCase().includes(q))&&(c==='all'||p.cat===c)&&(pr==='all'||(pr==='1'?p.price<2500:pr==='2'?p.price>=2500&&p.price<=5000:p.price>5000)));
  if(so==='asc')a.sort((x,y)=>x.price-y.price); if(so==='desc')a.sort((x,y)=>y.price-x.price);
  $('#grid').innerHTML=a.map(card).join('')||`<p class="none">${tr('none')}</p>`; reveal();
}
function fillSel(){const s=$('#fp'),v=s.value;s.innerHTML=P.map(p=>`<option value="${p.id}" ${p.stock<1?'disabled':''}>${esc(nm(p))} — ${fmt(p.price)}</option>`).join('');if(v)s.value=v}
function reviews(){$('#rv').innerHTML=R.map(r=>`<div class="rev rv"><div class="st">★★★★★</div><q class="tx">${esc(r.t[L]||r.t.fr||Object.values(r.t)[0])}</q><b>${esc(r.name)}</b><small>${esc(r.city[L]||r.city.fr||Object.values(r.city)[0])}</small></div>`).join('');reveal()}
async function insta(){
  const g=$('#ig'),prof='https://instagram.com/'+CFG.IG_USER;let items=[];
  if(CFG.IG_TOKEN){ // Instagram Graph API (Instagram Login) — see README
    try{const r=await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&limit=9&access_token=${CFG.IG_TOKEN}`);const j=await r.json();
      items=(j.data||[]).map(m=>({img:m.media_type==='VIDEO'?m.thumbnail_url:m.media_url,link:m.permalink})).filter(m=>m.img)}catch(e){}}
  if(!items.length)items=I.slice(0,9);
  if(!items.length)items=Array.from({length:6},(_,i)=>({img:ph({n:{en:'@'+CFG.IG_USER+' #'+(i+1)}}),link:prof}));
  g.innerHTML=items.map(m=>`<a class="rv" href="${esc(m.link)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(m.img)}" alt="Instagram @${CFG.IG_USER}"></a>`).join('');reveal();
}
let io;function reveal(){io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.rv:not(.in)').forEach(e=>io.observe(e))}

function lang(l){
  L=l;LS.s('ss_l',l);const h=document.documentElement;h.lang=l;document.body.classList.toggle('ar',l==='ar');
  $$('[data-i18n]').forEach(e=>e.textContent=tr(e.dataset.i18n));$$('[data-i18n-ph]').forEach(e=>e.placeholder=tr(e.dataset.i18nPh));
  $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));document.title=tr('t_title');
  shop();fillSel();reviews();if(!$('#admin').hidden)adminView(curTab);
}
function openQV(id){
  const p=P.find(x=>x.id==id);if(!p)return;
  $('#qvc').innerHTML=`<img src="${img(p)}" alt="${esc(nm(p))}"><div class="tx"><h3>${esc(nm(p))}</h3><div class="pr">${fmt(p.price)}</div><p>${esc(ds(p))}</p><p><small>${tr('cat_'+p.cat)}</small></p><a class="b wa" target="_blank" rel="noopener" href="${wa(CFG.PRE+' '+nm(p))}">WhatsApp</a><button class="b dk" data-ord="${p.id}" ${p.stock<1?'disabled':''}>${tr('ord')}</button></div>`;
  $('#qv').showModal();
}
function submitOrder(e){
  e.preventDefault();const f=e.target,v=Object.fromEntries(new FormData(f)),p=P.find(x=>x.id==v.prod),qty=Math.max(1,Math.min(20,parseInt(v.qty)||0)),m=$('#fm');
  const ok=v.name.trim().length>1&&/^[+0-9 ()-]{8,18}$/.test(v.phone.trim())&&v.city.trim().length>1&&p&&p.stock>0;
  m.className='msg'+(ok?'':' err');if(!ok){m.textContent=tr('f_err');return}
  const o={id:Date.now(),date:new Date().toISOString(),name:v.name.trim(),phone:v.phone.trim(),city:v.city.trim(),pid:p.id,product:p.n.fr,qty,total:p.price*qty,st:'New'};
  O.unshift(o);save();m.textContent=tr('f_ok');
  const txt=`${tr('msg')}:\n• Nom/Name: ${o.name}\n• Tel: ${o.phone}\n• Ville/City: ${o.city}\n• Produit/Product: ${p.n.fr} / ${p.n.en}\n• Qté: ${qty}\n• Total: ${fmt(o.total)}`;
  window.open(wa(txt),'_blank','noopener');f.reset();f.qty.value=1;
}

/* ================= ADMIN (#admin) ================= */
let curTab='dash';
const adminOK=()=>sessionStorage.getItem('ss_a')==='1';
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function route(){const on=location.hash==='#admin',a=$('#admin');a.hidden=!on;document.body.classList.toggle('noscroll',on);if(on)adminView(curTab)}
const TABS={dash:'Dashboard',orders:'Orders',prods:'Products',prices:'Prices',content:'Testimonials & Instagram'};
function adminView(tab){
  curTab=tab||'dash';const a=$('#admin');
  if(!adminOK()){a.innerHTML=`<form id="lg" class="login"><h2 style="margin:0">SMARTSTYLE</h2><small>Admin login</small><input name="u" placeholder="Username" autocomplete="username" required><input name="p" type="password" placeholder="Password" autocomplete="current-password" required><button class="b dk">Login</button><p id="le"></p><a href="#top">← Back to site</a></form>`;return}
  a.innerHTML=`<div class="ad"><aside class="side"><div class="logo">SMARTSTYLE</div>${Object.entries(TABS).map(([k,v])=>`<button data-a="tab" data-v="${k}" class="${k===curTab?'on':''}">${v}</button>`).join('')}<button data-a="out" style="margin-top:auto">Logout</button><a href="#top" style="padding:11px 14px;color:#999">← View site</a></aside><main class="main"><h2>${TABS[curTab]}</h2>${VIEWS[curTab]()}</main></div>`;
}
const VIEWS={
dash(){
  const act=O.filter(o=>o.st!=='Cancelled'),sales=act.reduce((s,o)=>s+o.total,0),td=O.filter(o=>new Date(o.date).toDateString()===new Date().toDateString()).length;
  const by={};act.forEach(o=>by[o.product]=(by[o.product]||0)+o.qty);const top=Object.entries(by).sort((a,b)=>b[1]-a[1]);const max=top[0]?top[0][1]:1;
  return `<div class="warn">Orders &amp; edits are stored in <b>this browser</b> (localStorage). See README → "Admin limits".</div><div class="cards"><div class="kc"><small>Total orders</small><b>${O.length}</b></div><div class="kc"><small>Total sales (excl. cancelled)</small><b>${fmt(sales)}</b></div><div class="kc"><small>New orders today</small><b>${td}</b></div><div class="kc"><small>Best selling product</small><b style="font-size:1.1rem">${top[0]?esc(top[0][0]):'—'}</b></div></div><div class="panel"><h3 style="margin-bottom:10px">Units sold per product</h3>${top.length?top.map(([n,q])=>`<div class="brow"><span>${esc(n)}</span><div><i style="width:${q/max*100}%"></i></div><b>${q}</b></div>`).join(''):'<p>No orders yet.</p>'}</div>`},
orders(){
  return `<div class="panel"><table><tr><th>Date</th><th>Customer</th><th>Phone</th><th>Product</th><th>Qty</th><th>City</th><th>Total</th><th>Status</th><th></th></tr>${O.map(o=>`<tr><td>${new Date(o.date).toLocaleString('fr-FR')}</td><td>${esc(o.name)}</td><td class="ltr">${esc(o.phone)}</td><td>${esc(o.product)}</td><td>${o.qty}</td><td>${esc(o.city)}</td><td>${fmt(o.total)}</td><td><select data-k="st" data-id="${o.id}">${['New','Confirmed','Delivered','Cancelled'].map(s=>`<option ${s===o.st?'selected':''}>${s}</option>`).join('')}</select></td><td><button class="del" data-a="delo" data-id="${o.id}">Delete</button></td></tr>`).join('')||'<tr><td colspan="9">No orders yet.</td></tr>'}</table></div>`},
prods(){
  return `<button class="b gd" data-a="addp" style="margin-bottom:14px">+ Add product</button><div class="panel"><table><tr><th>Photo</th><th>Name FR / EN / AR</th><th>Category</th><th>Price</th><th>Stock</th><th></th></tr>${P.map(p=>`<tr><td><img class="th" src="${img(p)}" alt=""><input type="file" accept="image/*" data-k="img" data-id="${p.id}" style="width:110px;padding:4px"></td><td><input data-k="pn" data-l="fr" data-id="${p.id}" value="${esc(p.n.fr)}"><input data-k="pn" data-l="en" data-id="${p.id}" value="${esc(p.n.en)}"><input data-k="pn" data-l="ar" data-id="${p.id}" value="${esc(p.n.ar)}"></td><td><select data-k="pc" data-id="${p.id}">${['chairs','tables','sofas'].map(c=>`<option ${c===p.cat?'selected':''}>${c}</option>`).join('')}</select></td><td><input type="number" min="0" data-k="pp" data-id="${p.id}" value="${p.price}"></td><td><input type="number" min="0" data-k="ps" data-id="${p.id}" value="${p.stock}"></td><td><button class="del" data-a="delp" data-id="${p.id}">Delete</button></td></tr>`).join('')}</table></div>`},
prices(){
  return `<div class="panel"><p style="margin-bottom:10px">Change a price: the public site updates instantly.</p><table>${P.map(p=>`<tr><td>${esc(p.n.fr)}</td><td><input type="number" min="0" data-k="pp" data-id="${p.id}" value="${p.price}" style="max-width:160px"> DH</td></tr>`).join('')}</table></div>`},
content(){
  return `<div class="panel"><h3>Testimonials</h3><table>${R.map(r=>`<tr><td><b>${esc(r.name)}</b></td><td>${esc(r.city.fr||Object.values(r.city)[0])}</td><td>${esc(r.t.fr||Object.values(r.t)[0])}</td><td><button class="del" data-a="delt" data-id="${r.id}">Delete</button></td></tr>`).join('')}</table><div class="row2"><input id="tn" placeholder="Name"><input id="tc" placeholder="City"><input id="tt" placeholder="Review text"><button class="b dk" data-a="addt">Add</button></div></div><div class="panel"><h3>Instagram posts (fallback if no API token)</h3><p style="margin:6px 0">One per line: <code>image URL | Instagram post URL</code></p><textarea data-k="ig" rows="6" style="width:100%">${esc(I.map(m=>m.img.startsWith('data:')?'':m.img+' | '+m.link).filter(Boolean).join('\n'))}</textarea></div>`}
};
function resize(f,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,900/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.8))};im.src=r.result};r.readAsDataURL(f)}
const refresh=()=>{save();shop();fillSel();reviews();insta()};

/* ================= EVENTS ================= */
document.addEventListener('DOMContentLoaded',()=>{
  $$('.lang button').forEach(b=>b.onclick=()=>lang(b.dataset.l));
  ['q','cat','prc','sort'].forEach(i=>$('#'+i).addEventListener(i==='q'?'input':'change',shop));
  $('#of').addEventListener('submit',submitOrder);
  $('#qv').addEventListener('click',e=>{if(e.target.id==='qv'||e.target.classList.contains('x'))e.target.closest('dialog').close()});
  document.addEventListener('click',e=>{
    const q=e.target.closest('[data-qv]'),o=e.target.closest('[data-ord]');
    if(q)openQV(q.dataset.qv);
    if(o){$('#qv').open&&$('#qv').close();$('#fp').value=o.dataset.ord;$('#order').scrollIntoView({behavior:'smooth'})}
    const a=e.target.closest('[data-a]');if(!a)return;const id=a.dataset.id,x=a.dataset.a;
    if(x==='tab')return adminView(a.dataset.v);
    if(x==='out'){sessionStorage.removeItem('ss_a');return adminView()}
    if(x==='delo'&&confirm('Delete this order?'))O=O.filter(o=>o.id!=id);
    else if(x==='delp'&&confirm('Delete this product?'))P=P.filter(p=>p.id!=id);
    else if(x==='addp')P.push({id:Date.now(),cat:'chairs',price:0,stock:0,img:'',n:{fr:'Nouveau produit',en:'New product',ar:'منتج جديد'},d:{fr:'',en:'',ar:''}});
    else if(x==='delt'&&confirm('Delete this testimonial?'))R=R.filter(r=>r.id!=id);
    else if(x==='addt'){const n=$('#tn').value.trim(),c=$('#tc').value.trim(),t=$('#tt').value.trim();if(!n||!t)return;R.push({id:Date.now(),name:n,city:{fr:c,en:c,ar:c},t:{fr:t,en:t,ar:t}})}
    else return;
    refresh();adminView(curTab);
  });
  $('#admin').addEventListener('change',e=>{
    const t=e.target,d=t.dataset;if(!d.k)return;const p=P.find(x=>x.id==d.id);
    if(d.k==='st')O.find(o=>o.id==d.id).st=t.value;
    else if(d.k==='pn')p.n[d.l]=t.value.trim()||p.n[d.l];
    else if(d.k==='pp')p.price=Math.max(0,+t.value||0);
    else if(d.k==='ps')p.stock=Math.max(0,+t.value||0);
    else if(d.k==='pc')p.cat=t.value;
    else if(d.k==='ig')I=t.value.split('\n').map(l=>l.split('|').map(s=>s.trim())).filter(x=>x[0]&&x[1]).map(([img,link])=>({img,link}));
    else if(d.k==='img'&&t.files[0])return resize(t.files[0],u=>{p.img=u;refresh();adminView(curTab)});
    refresh();if(d.k==='pp'||d.k==='pn')adminView(curTab);
  });
  $('#admin').addEventListener('submit',async e=>{
    if(e.target.id!=='lg')return;e.preventDefault();const f=e.target;
    if(await sha(f.u.value.trim().toLowerCase()+':'+f.p.value)===CFG.ADMIN_HASH){sessionStorage.setItem('ss_a','1');adminView('dash')}
    else{$('#le').textContent='Wrong username or password';f.p.value=''}
  });
  addEventListener('hashchange',route);
  lang(L);insta();route();
});
