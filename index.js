
TweenMax.from(".title1", 0.7, {
   opacity: 0,
   x: -80,
   ease: Expo.easeInOut
});
TweenMax.from(".title2", 0.7, {
   delay: 0.2,
   opacity: 0,
   x: -80,
   ease: Expo.easeInOut
});


TweenMax.from(".nadador", 1.5, {
   delay: 1.6,
   opacity: 0,
   x: "-100%",
   ease: Expo.easeInOut
});

TweenMax.from(".box1", 1.5, {
   delay: 1,
   rotation: 90,
   opacity: 0,
   x: -100,
   ease: Expo.easeInOut
});
TweenMax.from(".box2", 1.5, {
   delay: 1.2,
   rotation: 180,
   opacity: 0,
   x: -400,
   ease: Expo.easeInOut
});
TweenMax.from(".box3", 1.5, {
   delay: 1,
   rotation: 190,
   opacity: 0,
   x: -600,
   ease: Expo.easeInOut
});
TweenMax.from(".box4", 1.5, {
   delay: 1,
   rotation: 190,
   opacity: 0,
   x: -600,
   ease: Expo.easeInOut
});


TweenMax.from(".pattern", 2, {
   delay: 0.2,
   width: 0,
   opacity: 0,
   ease: Elastic.easeInOut
});


TweenMax.from(".logo", 2, {
   delay: 0.2,
   y: 50,
   opacity: 0,
   ease: Expo.easeInOut
});


TweenMax.staggerFrom(".menu ul li", 0.8, {
   delay: 0.2,
   y: 50,
   opacity: 0,
   scale: 2,
   ease: Expo.easeInOut
}, 0.2);

// Animación del carrito
TweenMax.from(".cart", 2, {
   delay: 0.2,
   y: 50,
   opacity: 0,
   rotation: 20,
   ease: Expo.easeInOut
});


TweenMax.staggerFrom(".media ul li", 2, {
   delay: 0.2,
   opacity: 0,
   scale: 0,
   ease: Expo.easeInOut
}, 0.2);


TweenMax.from(".content", 2, {
   delay: 0.2,
   y: 50,
   opacity: 0,
   ease: Expo.easeInOut
});


TweenMax.to(".staricon1", 8, {
   delay: 2.6,
   rotation: 360,
   repeat: -1,
   ease: Power0.easeNone
});
TweenMax.to(".staricon2", 8, {
   delay: 2.6,
   rotation: 360,
   repeat: -1,
   ease: Power0.easeNone
});
TweenMax.to(".staricon3", 8, {
   delay: 2.6,
   rotation: 360,
   repeat: -1,
   ease: Power0.easeNone
})