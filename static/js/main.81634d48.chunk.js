(this["webpackJsonprvm-website"]=this["webpackJsonprvm-website"]||[]).push([[0],{333:function(e,t){},334:function(e,t){},342:function(e,t){},345:function(e,t){},346:function(e,t){},352:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),A=n(53),c=n.n(A),i=n(181),o=n(386),s=n(390),l=n(391),u=n(392),j=n(382),d=n(396),h=n(393),m=n(59),b=n(5),g=n.n(b),p=n(6),x=n(12),O=n(54),y=n(395),f=n(384),B=n(394),E=n(397),Q=n(385),k=n(235),w=n.p+"static/media/background.2ea9b018.jpg",v=n(22);function I(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(g.a.mark((function e(t,n,r){var a,A,c,i,o,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.g((function(){var e=null!=t?t.squeeze(0).mul(255).cast("int32"):O.d([n.shape[1],n.shape[2],3],255,"int32"),r=null!=n?n.squeeze(0).mul(255).cast("int32"):O.d([t.shape[1],t.shape[2],1],255,"int32");return O.a([e,r],-1)})),t&&t.dispose(),n&&n.dispose(),A=a.shape.slice(0,2),c=Object(p.a)(A,2),i=c[0],o=c[1],e.t0=Uint8ClampedArray,e.next=7,a.data();case 7:e.t1=e.sent,s=new e.t0(e.t1),l=new ImageData(s,o,i),r.width=o,r.height=i,r.getContext("2d").putImageData(l,0,0),a.dispose();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(g.a.mark((function e(t,n){var r,a,A,c,i,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O.g((function(){return t=t.unstack(-1),t=(t=O.a(t,1)).split(4,1),t=(t=(t=(t=(t=O.a(t,2)).squeeze(0)).expandDims(-1)).add(1).mul(127.5).cast("int32")).tile([1,1,3]),t=O.a([t,O.d([t.shape[0],t.shape[1],1],255,"int32")],-1)})),a=r.shape.slice(0,2),A=Object(p.a)(a,2),c=A[0],i=A[1],e.t0=Uint8ClampedArray,e.next=5,r.data();case 5:e.t1=e.sent,o=new e.t0(e.t1),s=new ImageData(o,i,c),n.width=i,n.height=c,n.getContext("2d").putImageData(s,0,0),r.dispose();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useRef)(!1),a=Object(r.useRef)(-1),A=function(e,t){var n=Object(r.useRef)({webCam:null,stream:null}),a=Object(r.useState)(n.current),A=Object(p.a)(a,2),c=A[0],i=A[1];return Object(r.useEffect)((function(){return navigator.mediaDevices.getUserMedia({video:{width:e,height:t}}).then((function(e){var t=document.createElement("video");t.srcObject=e,O.b.webcam(t).then((function(t){n.current={webCam:t,stream:e},i(n.current)}))})),function(){n.current.stream&&(n.current.stream.getTracks().forEach((function(e){e.stop()})),n.current.webCam.stop(),n.current={webCam:null,stream:null},i(n.current))}}),[e,t]),c}(640,480),c=A.webCam,i=A.stream,o=function(e){var t=Object(r.useState)(0),n=Object(p.a)(t,2),a=n[0],A=n[1],c=Object(r.useState)(),i=Object(p.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){O.e(e,{onProgress:A}).then(s)}),[e]),{model:o,progress:a}}("".concat("/RobustVideoMatting","/model/model.json")),s=o.model,l=o.progress;Object(r.useEffect)((function(){var r=[O.f(0),O.f(0),O.f(0),O.f(0)],A=r[0],i=r[1],o=r[2],l=r[3],u=O.f(.5);function j(){return d.apply(this,arguments)}function d(){return(d=Object(x.a)(g.a.mark((function r(){var d,h,m,b,x,y,f,B,E,Q,k,v,R;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(s&&c&&e.current&&t.current)){r.next=16;break}return n.current&&(O.c([A,i,o,l]),d=[O.f(0),O.f(0),O.f(0),O.f(0)],A=d[0],i=d[1],o=d[2],l=d[3],n.current=!1),r.next=4,c.capture();case 4:return h=r.sent,m=O.g((function(){return h.expandDims(0).div(255)})),r.next=8,s.executeAsync({src:m,r1i:A,r2i:i,r3i:o,r4i:l,downsample_ratio:u},["fgr","pha","r1o","r2o","r3o","r4o"]);case 8:b=r.sent,x=b,y=Object(p.a)(x,6),f=y[0],B=y[1],E=y[2],Q=y[3],k=y[4],v=y[5],"white"===t.current.value?(I(f.clone(),B.clone(),e.current),e.current.style.background="none"):"green"===t.current.value?(I(f.clone(),B.clone(),e.current),e.current.style.background="rgb(120, 255, 155)"):"image"===t.current.value?(I(f.clone(),B.clone(),e.current),R='url("'.concat(w,'") center center / cover'),e.current.style.background===R||("none"===e.current.style.background?e.current.style.background=R:e.current.style.background="none")):"alpha"===t.current.value?(I(null,B.clone(),e.current),e.current.style.background="#000"):"foreground"===t.current.value?I(f.clone(),null,e.current):"recurrent1"===t.current.value?M(E,e.current):"recurrent2"===t.current.value?M(Q,e.current):"recurrent3"===t.current.value?M(k,e.current):"recurrent4"===t.current.value&&M(v,e.current),O.c([h,m,f,B,A,i,o,l]),A=E,i=Q,o=k,l=v;case 16:a.current=requestAnimationFrame(j);case 17:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return a.current=requestAnimationFrame(j),function(){cancelAnimationFrame(a.current),O.c([A,i,o,l,u])}}),[s,c]);var u=function(){return Object(v.jsxs)(k.a,{children:[Object(v.jsx)("title",{children:"RVM: Web Demo"}),Object(v.jsx)("meta",{name:"description",content:"Run our model on the web browser."})]})},d=function(){return Object(v.jsxs)(y.a,{pt:4,pb:3,textAlign:"center",children:[Object(v.jsx)(j.a,{variant:"h4",gutterBottom:!0,children:"Robust Video Matting Web Demo"}),Object(v.jsx)(j.a,{gutterBottom:!0,children:Object(v.jsx)("strong",{children:"Please use Chromium-based browsers!"})})]})};return c?l<1?Object(v.jsxs)(y.a,{px:2,py:4,textAlign:"center",children:[u(),d(),Object(v.jsxs)(y.a,{py:4,maxWidth:512,margin:"0 auto",children:[Object(v.jsx)(j.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Downloading the model (4MB)"}),Object(v.jsx)(f.a,{variant:"determinate",value:100*l})]})]}):Object(v.jsxs)(y.a,{px:2,py:4,maxWidth:1280,margin:"0 auto",children:[u(),d(),Object(v.jsxs)(y.a,{pb:3,textAlign:"center",children:[Object(v.jsx)(j.a,{children:"This demo runs our model in your browser. You can switch to inspect the model's recurrent states."}),Object(v.jsx)(j.a,{children:"As the human subject moves, our model learns to reconstruct the background in its recurrent states."}),Object(v.jsx)(j.a,{children:"Even when the camera is moving, the model learns to refresh its memory."})]}),Object(v.jsxs)(y.a,{py:2,textAlign:"center",children:[Object(v.jsxs)(B.a,{defaultValue:"white",inputRef:t,label:"View",variant:"outlined",select:!0,children:[Object(v.jsx)(E.a,{value:"white",children:"White Background"}),Object(v.jsx)(E.a,{value:"green",children:"Green Background"}),Object(v.jsx)(E.a,{value:"image",children:"Image Background"}),Object(v.jsx)(E.a,{value:"alpha",children:"Alpha"}),Object(v.jsx)(E.a,{value:"foreground",children:"Foreground"}),Object(v.jsx)(E.a,{value:"recurrent1",children:"Recurrent State 1"}),Object(v.jsx)(E.a,{value:"recurrent2",children:"Recurrent State 2"}),Object(v.jsx)(E.a,{value:"recurrent3",children:"Recurrent State 3"}),Object(v.jsx)(E.a,{value:"recurrent4",children:"Recurrent State 4"})]}),Object(v.jsx)(Q.a,{variant:"outlined",onClick:function(){return n.current=!0},style:{height:56,marginLeft:8},children:"Refresh Recurrent States"})]}),Object(v.jsxs)(y.a,{display:"flex",children:[Object(v.jsxs)(y.a,{width:"100%",maxWidth:"50%",textAlign:"center",children:[Object(v.jsx)(j.a,{variant:"caption",color:"textSecondary",align:"center",paragraph:!0,children:"Input"}),Object(v.jsx)("video",{ref:function(e){e&&(e.srcObject=i)},autoPlay:!0,style:{maxWidth:"100%"}})]}),Object(v.jsxs)(y.a,{width:"100%",maxWidth:"50%",textAlign:"center",children:[Object(v.jsx)(j.a,{variant:"caption",color:"textSecondary",align:"center",paragraph:!0,children:"Output"}),Object(v.jsx)("canvas",{ref:e,style:{maxWidth:"100%"}})]})]}),Object(v.jsxs)(y.a,{py:5,children:[Object(v.jsx)(j.a,{align:"center",variant:"body2",color:"textSecondary",children:"The model is running on TensorFlow.js using WebGL."}),Object(v.jsx)(j.a,{align:"center",variant:"body2",color:"textSecondary",children:"The web demo has lowered the quality to trade off for speed. Our official PyTorch model is better and faster."}),Object(v.jsx)(j.a,{align:"center",variant:"body2",color:"textSecondary",children:"If your laptop has two GPUs, consider forcing to use the dedicated GPU in system setting for faster performance."})]})]}):Object(v.jsxs)(y.a,{width:1,px:2,py:4,textAlign:"center",children:[u(),d(),Object(v.jsx)(y.a,{py:4,children:Object(v.jsx)(j.a,{color:"textSecondary",children:"Initializing webcam. Please enable webcam access."})})]})},P=n(98),V=n(398),T=n(399),D=n(387),H=n(388),q=n(389),G=n(241),W=n.n(G),N=n.p+"static/media/soumyadip.19a06322.jpg",K=Object(o.a)((function(e){return{items:{textAlign:"center",padding:e.spacing(3,0),"& > *":{margin:e.spacing(.5)}},content:{"& > h6":{marginTop:e.spacing(6)}},video:Object(P.a)({borderRadius:e.shape.borderRadius},e.breakpoints.down("xs"),{height:"250px !important"}),video1Column:{height:450},video2Column:{height:200},video3Column:{height:135},citation:{whiteSpace:"pre-wrap"}}})),Y=function(){var e=K();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(k.a,{children:[Object(v.jsx)("title",{children:"RVM: Robust High-Resolution Video Matting with Temporal Guidance"}),Object(v.jsx)("meta",{name:"description",content:"Official site for paper Robust High-Resolution Video Matting with Temporal Guidance"})]}),Object(v.jsxs)(y.a,{px:2,pt:8,pb:4,children:[Object(v.jsx)(j.a,{variant:"h4",align:"center",gutterBottom:!0,children:"Robust High-Resolution Video Matting with Temporal Guidance"}),Object(v.jsxs)(j.a,{variant:"h6",align:"center",gutterBottom:!0,children:["Human Matting on Any Videos | Real-time ",Object(v.jsx)("strong",{children:"4K 70FPS+"})," and ",Object(v.jsx)("strong",{children:"HD 100FPS+"})]}),Object(v.jsx)(j.a,{color:"textSecondary",align:"center",children:"ByteDance Inc. | University of Washington"}),Object(v.jsxs)("div",{className:e.items,children:[Object(v.jsx)(V.a,{component:"a",href:"https://www.linkedin.com/in/shanchuanlin",target:"_blank",clickable:!0,avatar:Object(v.jsx)(T.a,{src:"data:image/jpeg;base64,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"}),label:"Shanchuan Lin"}),Object(v.jsx)(V.a,{component:"a",href:"https://sites.google.com/site/linjieyang89/",target:"_blank",clickable:!0,avatar:Object(v.jsx)(T.a,{src:"data:image/jpeg;base64,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"}),label:"Linjie Yang"}),Object(v.jsx)(V.a,{component:"a",href:"https://www.linkedin.com/in/imran-saleemi/",target:"_blank",clickable:!0,avatar:Object(v.jsx)(T.a,{src:"data:image/jpeg;base64,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"}),label:"Imran Saleemi"}),Object(v.jsx)(V.a,{component:"a",href:"https://homes.cs.washington.edu/~soumya91/",target:"_blank",clickable:!0,avatar:Object(v.jsx)(T.a,{src:N}),label:"Soumyadip Sengupta"})]}),Object(v.jsxs)("div",{className:e.items,children:[Object(v.jsx)(Q.a,{color:"primary",startIcon:Object(v.jsx)(D.a,{}),component:"a",href:"http://arxiv.org/abs/2108.11515",target:"_blank",children:"Paper"}),Object(v.jsx)(Q.a,{color:"primary",startIcon:Object(v.jsx)(H.a,{}),component:"a",href:"https://github.com/PeterL1n/RobustVideoMatting",target:"_blank",children:"Code"}),Object(v.jsx)(Q.a,{color:"primary",startIcon:Object(v.jsx)(q.a,{}),component:i.b,to:"/demo",children:"Demo"})]})]}),Object(v.jsxs)(y.a,{p:2,mb:4,maxWidth:800,m:"0 auto",className:e.content,children:[Object(v.jsx)("iframe",{className:W()(e.video,e.video1Column),src:"https://www.youtube.com/embed/Jvzltozpbpk?rel=0&modestbranding=1&autohide=1&showinfo=0&enablejsapi=1",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"100%"}),Object(v.jsxs)(j.a,{variant:"caption",align:"center",component:"div",children:["Open in ",Object(v.jsx)("a",{href:"https://youtu.be/Jvzltozpbpk",target:"_blank",children:"YouTube"})," or ",Object(v.jsx)("a",{href:"https://www.bilibili.com/video/BV1Z3411B7g7/",target:"_blank",children:"Bilibili"}),"."]}),Object(v.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Abstract"}),Object(v.jsx)(j.a,{paragraph:!0,children:"We introduce a robust, real-time, high-resolution human video matting method that achieves new state-of-the-art performance. Our method is much lighter than previous approaches and can process 4K at 76 FPS and HD at 104 FPS on an Nvidia GTX 1080Ti GPU. Unlike most existing methods that perform video matting frame-by-frame as independent images, our method uses a recurrent architecture to exploit temporal information in videos and achieves significant improvements in temporal coherence and matting quality. Furthermore, we propose a novel training strategy that enforces our network on both matting and segmentation objectives. This significantly improves our model's robustness. Our method does not require any auxiliary inputs such as a trimap or a pre-captured background image, so it can be widely applied to existing human matting applications."}),Object(v.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Download"}),Object(v.jsxs)(j.a,{paragraph:!0,children:["Our model is available in ",Object(v.jsx)("b",{children:"PyTorch"}),", ",Object(v.jsx)("b",{children:"TorchScript"}),", ",Object(v.jsx)("b",{children:"ONNX"}),", ",Object(v.jsx)("b",{children:"TensorFlow"}),", and ",Object(v.jsx)("b",{children:"TensorFlow.js"}),"."]}),Object(v.jsx)(y.a,{textAlign:"center",children:Object(v.jsx)(Q.a,{color:"primary",startIcon:Object(v.jsx)(H.a,{}),component:"a",href:"https://github.com/PeterL1n/RobustVideoMatting",target:"_blank",children:"Github"})}),Object(v.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Supplementary"}),Object(v.jsx)(j.a,{gutterBottom:!0,children:"We show the recurrent states of our model in the following video. Our model learns to reconstruct the background and keep track of the motion history."}),Object(v.jsx)("iframe",{className:W()(e.video,e.video1Column),src:"https://www.youtube.com/embed/Ay-mGCEYEzM?rel=0&modestbranding=1&autohide=1&showinfo=0&enablejsapi=1",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"100%"}),Object(v.jsxs)(j.a,{variant:"caption",align:"center",component:"div",children:["Open in ",Object(v.jsx)("a",{href:"https://youtu.be/Ay-mGCEYEzM",target:"_blank",children:"YouTube"})," or ",Object(v.jsx)("a",{href:"https://www.bilibili.com/video/BV19Q4y1h7xK/",target:"_blank",children:"Bilibili"}),"."]}),Object(v.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Citation"}),Object(v.jsx)("code",{className:e.citation,children:"@misc{rvm,\n      title={Robust High-Resolution Video Matting with Temporal Guidance}, \n      author={Shanchuan Lin and Linjie Yang and Imran Saleemi and Soumyadip Sengupta},\n      year={2021},\n      eprint={2108.11515},\n      archivePrefix={arXiv},\n      primaryClass={cs.CV}\n}"})]})]})},z=Object(o.a)((function(e){return{appBar:{borderBottom:"1px solid #ddd"},toolbar:{minHeight:0},title:{flexGrow:1},tab:{textTransform:"none"}}})),X=function(){var e=z(),t=Object(m.h)(),n=Object(m.g)(),a=[{path:"/",title:"Project",component:Y},{path:"/demo",title:"Web Demo",component:C}];return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[t.pathname]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.a,{}),Object(v.jsx)(l.a,{className:e.appBar,elevation:0,color:"default",position:"sticky",children:Object(v.jsxs)(u.a,{className:e.toolbar,children:[Object(v.jsx)(j.a,{className:e.title,variant:"h6",children:"RVM"}),Object(v.jsx)(d.a,{value:t.pathname,onChange:function(e,t){return n.replace(t)},children:a.map((function(t){var n=t.path,r=t.title;return Object(v.jsx)(h.a,{className:e.tab,label:r,value:n},n)}))})]})}),Object(v.jsxs)(m.d,{children:[a.map((function(e){var t=e.path,n=e.component;return Object(v.jsx)(m.b,{path:t,component:n,exact:!0},t)})),Object(v.jsx)(m.b,{children:Object(v.jsx)(m.a,{to:"/"})})]})]})};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(X,{})})}),document.getElementById("root"))}},[[352,1,2]]]);
//# sourceMappingURL=main.81634d48.chunk.js.map