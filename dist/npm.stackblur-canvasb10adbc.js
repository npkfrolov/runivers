(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{317:function(e,t){var n=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],r=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function a(e,t,n,r,a){if("string"==typeof e)e=document.getElementById(e);else if("undefined"!=typeof HTMLCanvasElement&&!e instanceof HTMLCanvasElement)return;var o,f=e.getContext("2d");try{try{o=f.getImageData(t,n,r,a)}catch(e){throw new Error("unable to access local image data: "+e)}}catch(e){throw new Error("unable to access image data: "+e)}return o}function o(e,t,n,r,o,i){if(!(isNaN(i)||i<1)){i|=0;var g=a(e,t,n,r,o);g=f(g,t,n,r,o,i),e.getContext("2d").putImageData(g,t,n)}}function f(e,t,a,o,f,i){var g,l,x,d,b,s,c,m,h,w,p,y,v,E,I,C,B,H,L,M,N,T,D,R,G=e.data,k=i+i+1,A=o-1,J=f-1,W=i+1,j=W*(W+1)/2,q=new u,z=q;for(x=1;x<k;x++)if(z=z.next=new u,x==W)var F=z;z.next=q;var K=null,O=null;c=s=0;var P=n[i],Q=r[i];for(l=0;l<f;l++){for(C=B=H=L=m=h=w=p=0,y=W*(M=G[s]),v=W*(N=G[s+1]),E=W*(T=G[s+2]),I=W*(D=G[s+3]),m+=j*M,h+=j*N,w+=j*T,p+=j*D,z=q,x=0;x<W;x++)z.r=M,z.g=N,z.b=T,z.a=D,z=z.next;for(x=1;x<W;x++)d=s+((A<x?A:x)<<2),m+=(z.r=M=G[d])*(R=W-x),h+=(z.g=N=G[d+1])*R,w+=(z.b=T=G[d+2])*R,p+=(z.a=D=G[d+3])*R,C+=M,B+=N,H+=T,L+=D,z=z.next;for(K=q,O=F,g=0;g<o;g++)G[s+3]=D=p*P>>Q,0!=D?(D=255/D,G[s]=(m*P>>Q)*D,G[s+1]=(h*P>>Q)*D,G[s+2]=(w*P>>Q)*D):G[s]=G[s+1]=G[s+2]=0,m-=y,h-=v,w-=E,p-=I,y-=K.r,v-=K.g,E-=K.b,I-=K.a,d=c+((d=g+i+1)<A?d:A)<<2,m+=C+=K.r=G[d],h+=B+=K.g=G[d+1],w+=H+=K.b=G[d+2],p+=L+=K.a=G[d+3],K=K.next,y+=M=O.r,v+=N=O.g,E+=T=O.b,I+=D=O.a,C-=M,B-=N,H-=T,L-=D,O=O.next,s+=4;c+=o}for(g=0;g<o;g++){for(B=H=L=C=h=w=p=m=0,y=W*(M=G[s=g<<2]),v=W*(N=G[s+1]),E=W*(T=G[s+2]),I=W*(D=G[s+3]),m+=j*M,h+=j*N,w+=j*T,p+=j*D,z=q,x=0;x<W;x++)z.r=M,z.g=N,z.b=T,z.a=D,z=z.next;for(b=o,x=1;x<=i;x++)s=b+g<<2,m+=(z.r=M=G[s])*(R=W-x),h+=(z.g=N=G[s+1])*R,w+=(z.b=T=G[s+2])*R,p+=(z.a=D=G[s+3])*R,C+=M,B+=N,H+=T,L+=D,z=z.next,x<J&&(b+=o);for(s=g,K=q,O=F,l=0;l<f;l++)G[(d=s<<2)+3]=D=p*P>>Q,D>0?(D=255/D,G[d]=(m*P>>Q)*D,G[d+1]=(h*P>>Q)*D,G[d+2]=(w*P>>Q)*D):G[d]=G[d+1]=G[d+2]=0,m-=y,h-=v,w-=E,p-=I,y-=K.r,v-=K.g,E-=K.b,I-=K.a,d=g+((d=l+W)<J?d:J)*o<<2,m+=C+=K.r=G[d],h+=B+=K.g=G[d+1],w+=H+=K.b=G[d+2],p+=L+=K.a=G[d+3],K=K.next,y+=M=O.r,v+=N=O.g,E+=T=O.b,I+=D=O.a,C-=M,B-=N,H-=T,L-=D,O=O.next,s+=o}return e}function i(e,t,n,r,o,f){if(!(isNaN(f)||f<1)){f|=0;var i=a(e,t,n,r,o);i=g(i,t,n,r,o,f),e.getContext("2d").putImageData(i,t,n)}}function g(e,t,a,o,f,i){var g,l,x,d,b,s,c,m,h,w,p,y,v,E,I,C,B,H,L,M,N=e.data,T=i+i+1,D=o-1,R=f-1,G=i+1,k=G*(G+1)/2,A=new u,J=A;for(x=1;x<T;x++)if(J=J.next=new u,x==G)var W=J;J.next=A;var j=null,q=null;c=s=0;var z=n[i],F=r[i];for(l=0;l<f;l++){for(E=I=C=m=h=w=0,p=G*(B=N[s]),y=G*(H=N[s+1]),v=G*(L=N[s+2]),m+=k*B,h+=k*H,w+=k*L,J=A,x=0;x<G;x++)J.r=B,J.g=H,J.b=L,J=J.next;for(x=1;x<G;x++)d=s+((D<x?D:x)<<2),m+=(J.r=B=N[d])*(M=G-x),h+=(J.g=H=N[d+1])*M,w+=(J.b=L=N[d+2])*M,E+=B,I+=H,C+=L,J=J.next;for(j=A,q=W,g=0;g<o;g++)N[s]=m*z>>F,N[s+1]=h*z>>F,N[s+2]=w*z>>F,m-=p,h-=y,w-=v,p-=j.r,y-=j.g,v-=j.b,d=c+((d=g+i+1)<D?d:D)<<2,m+=E+=j.r=N[d],h+=I+=j.g=N[d+1],w+=C+=j.b=N[d+2],j=j.next,p+=B=q.r,y+=H=q.g,v+=L=q.b,E-=B,I-=H,C-=L,q=q.next,s+=4;c+=o}for(g=0;g<o;g++){for(I=C=E=h=w=m=0,p=G*(B=N[s=g<<2]),y=G*(H=N[s+1]),v=G*(L=N[s+2]),m+=k*B,h+=k*H,w+=k*L,J=A,x=0;x<G;x++)J.r=B,J.g=H,J.b=L,J=J.next;for(b=o,x=1;x<=i;x++)s=b+g<<2,m+=(J.r=B=N[s])*(M=G-x),h+=(J.g=H=N[s+1])*M,w+=(J.b=L=N[s+2])*M,E+=B,I+=H,C+=L,J=J.next,x<R&&(b+=o);for(s=g,j=A,q=W,l=0;l<f;l++)N[d=s<<2]=m*z>>F,N[d+1]=h*z>>F,N[d+2]=w*z>>F,m-=p,h-=y,w-=v,p-=j.r,y-=j.g,v-=j.b,d=g+((d=l+G)<R?d:R)*o<<2,m+=E+=j.r=N[d],h+=I+=j.g=N[d+1],w+=C+=j.b=N[d+2],j=j.next,p+=B=q.r,y+=H=q.g,v+=L=q.b,E-=B,I-=H,C-=L,q=q.next,s+=o}return e}function u(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}e.exports={image:function(e,t,n,r){if("string"==typeof e)e=document.getElementById(e);else if("undefined"!=typeof HTMLImageElement&&!e instanceof HTMLImageElement)return;var a=e.naturalWidth,f=e.naturalHeight;if("string"==typeof t)t=document.getElementById(t);else if("undefined"!=typeof HTMLCanvasElement&&!t instanceof HTMLCanvasElement)return;t.style.width=a+"px",t.style.height=f+"px",t.width=a,t.height=f;var g=t.getContext("2d");g.clearRect(0,0,a,f),g.drawImage(e,0,0),isNaN(n)||n<1||(r?o(t,0,0,a,f,n):i(t,0,0,a,f,n))},canvasRGBA:o,canvasRGB:i,imageDataRGBA:f,imageDataRGB:g}}}]);