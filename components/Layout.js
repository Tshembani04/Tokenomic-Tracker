import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Tokenomics Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/fav1.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <svg
              width="150"
              height="141"
              viewBox="0 0 150 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115 30.6121C52.0255 25.9914 84.1838 67 60.7117 67C37.2396 67 30 47.5186 30 30.6121C30 13.7055 49.0279 0 72.5 0C95.9721 0 115 13.7055 115 30.6121Z"
                fill="#1E90FF"
              />
              <line
                y1="-0.5"
                x2="106.386"
                y2="-0.5"
                transform="matrix(0.803241 -0.595655 0.65064 0.759386 49.4923 80.0761)"
                stroke="#1E90FF"
              />
              <path
                d="M14.1875 96.7891H8.70312V112H6.46484V96.7891H0.992188V94.9375H14.1875V96.7891ZM29.5156 104.02C29.5156 105.691 29.2344 107.152 28.6719 108.402C28.1094 109.645 27.3125 110.594 26.2812 111.25C25.25 111.906 24.0469 112.234 22.6719 112.234C21.3281 112.234 20.1367 111.906 19.0977 111.25C18.0586 110.586 17.25 109.645 16.6719 108.426C16.1016 107.199 15.8086 105.781 15.793 104.172V102.941C15.793 101.301 16.0781 99.8516 16.6484 98.5938C17.2188 97.3359 18.0234 96.375 19.0625 95.7109C20.1094 95.0391 21.3047 94.7031 22.6484 94.7031C24.0156 94.7031 25.2188 95.0352 26.2578 95.6992C27.3047 96.3555 28.1094 97.3125 28.6719 98.5703C29.2344 99.8203 29.5156 101.277 29.5156 102.941V104.02ZM27.2773 102.918C27.2773 100.895 26.8711 99.3438 26.0586 98.2656C25.2461 97.1797 24.1094 96.6367 22.6484 96.6367C21.2266 96.6367 20.1055 97.1797 19.2852 98.2656C18.4727 99.3438 18.0547 100.844 18.0312 102.766V104.02C18.0312 105.98 18.4414 107.523 19.2617 108.648C20.0898 109.766 21.2266 110.324 22.6719 110.324C24.125 110.324 25.25 109.797 26.0469 108.742C26.8438 107.68 27.2539 106.16 27.2773 104.184V102.918ZM37.2266 104.066L35.1406 106.234V112H32.8906V94.9375H35.1406V103.375L42.7227 94.9375H45.4414L38.7266 102.473L45.9688 112H43.2734L37.2266 104.066ZM57.582 104.113H50.1875V110.16H58.7773V112H47.9375V94.9375H58.6602V96.7891H50.1875V102.273H57.582V104.113ZM74.6914 112H72.4297L63.8398 98.8516V112H61.5781V94.9375H63.8398L72.4531 108.145V94.9375H74.6914V112ZM91.8125 104.02C91.8125 105.691 91.5312 107.152 90.9688 108.402C90.4062 109.645 89.6094 110.594 88.5781 111.25C87.5469 111.906 86.3438 112.234 84.9688 112.234C83.625 112.234 82.4336 111.906 81.3945 111.25C80.3555 110.586 79.5469 109.645 78.9688 108.426C78.3984 107.199 78.1055 105.781 78.0898 104.172V102.941C78.0898 101.301 78.375 99.8516 78.9453 98.5938C79.5156 97.3359 80.3203 96.375 81.3594 95.7109C82.4062 95.0391 83.6016 94.7031 84.9453 94.7031C86.3125 94.7031 87.5156 95.0352 88.5547 95.6992C89.6016 96.3555 90.4062 97.3125 90.9688 98.5703C91.5312 99.8203 91.8125 101.277 91.8125 102.941V104.02ZM89.5742 102.918C89.5742 100.895 89.168 99.3438 88.3555 98.2656C87.543 97.1797 86.4062 96.6367 84.9453 96.6367C83.5234 96.6367 82.4023 97.1797 81.582 98.2656C80.7695 99.3438 80.3516 100.844 80.3281 102.766V104.02C80.3281 105.98 80.7383 107.523 81.5586 108.648C82.3867 109.766 83.5234 110.324 84.9688 110.324C86.4219 110.324 87.5469 109.797 88.3438 108.742C89.1406 107.68 89.5508 106.16 89.5742 104.184V102.918ZM98.0938 94.9375L103.672 108.859L109.25 94.9375H112.168V112H109.918V105.355L110.129 98.1836L104.527 112H102.805L97.2148 98.2188L97.4375 105.355V112H95.1875V94.9375H98.0938ZM118.555 112H116.305V94.9375H118.555V112ZM135.23 106.586C135.02 108.391 134.352 109.785 133.227 110.77C132.109 111.746 130.621 112.234 128.762 112.234C126.746 112.234 125.129 111.512 123.91 110.066C122.699 108.621 122.094 106.688 122.094 104.266V102.625C122.094 101.039 122.375 99.6445 122.938 98.4414C123.508 97.2383 124.312 96.3164 125.352 95.6758C126.391 95.0273 127.594 94.7031 128.961 94.7031C130.773 94.7031 132.227 95.2109 133.32 96.2266C134.414 97.2344 135.051 98.6328 135.23 100.422H132.969C132.773 99.0625 132.348 98.0781 131.691 97.4688C131.043 96.8594 130.133 96.5547 128.961 96.5547C127.523 96.5547 126.395 97.0859 125.574 98.1484C124.762 99.2109 124.355 100.723 124.355 102.684V104.336C124.355 106.188 124.742 107.66 125.516 108.754C126.289 109.848 127.371 110.395 128.762 110.395C130.012 110.395 130.969 110.113 131.633 109.551C132.305 108.98 132.75 107.992 132.969 106.586H135.23ZM143.34 104.395C141.41 103.84 140.004 103.16 139.121 102.355C138.246 101.543 137.809 100.543 137.809 99.3555C137.809 98.0117 138.344 96.9023 139.414 96.0273C140.492 95.1445 141.891 94.7031 143.609 94.7031C144.781 94.7031 145.824 94.9297 146.738 95.3828C147.66 95.8359 148.371 96.4609 148.871 97.2578C149.379 98.0547 149.633 98.9258 149.633 99.8711H147.371C147.371 98.8398 147.043 98.0312 146.387 97.4453C145.73 96.8516 144.805 96.5547 143.609 96.5547C142.5 96.5547 141.633 96.8008 141.008 97.293C140.391 97.7773 140.082 98.4531 140.082 99.3203C140.082 100.016 140.375 100.605 140.961 101.09C141.555 101.566 142.559 102.004 143.973 102.402C145.395 102.801 146.504 103.242 147.301 103.727C148.105 104.203 148.699 104.762 149.082 105.402C149.473 106.043 149.668 106.797 149.668 107.664C149.668 109.047 149.129 110.156 148.051 110.992C146.973 111.82 145.531 112.234 143.727 112.234C142.555 112.234 141.461 112.012 140.445 111.566C139.43 111.113 138.645 110.496 138.09 109.715C137.543 108.934 137.27 108.047 137.27 107.055H139.531C139.531 108.086 139.91 108.902 140.668 109.504C141.434 110.098 142.453 110.395 143.727 110.395C144.914 110.395 145.824 110.152 146.457 109.668C147.09 109.184 147.406 108.523 147.406 107.688C147.406 106.852 147.113 106.207 146.527 105.754C145.941 105.293 144.879 104.84 143.34 104.395ZM43.7891 124.789H38.3047V140H36.0664V124.789H30.5938V122.938H43.7891V124.789ZM52.5781 133.098H48.5703V140H46.3086V122.938H51.957C53.8789 122.938 55.3555 123.375 56.3867 124.25C57.4258 125.125 57.9453 126.398 57.9453 128.07C57.9453 129.133 57.6562 130.059 57.0781 130.848C56.5078 131.637 55.7109 132.227 54.6875 132.617L58.6953 139.859V140H56.2812L52.5781 133.098ZM48.5703 131.258H52.0273C53.1445 131.258 54.0312 130.969 54.6875 130.391C55.3516 129.812 55.6836 129.039 55.6836 128.07C55.6836 127.016 55.3672 126.207 54.7344 125.645C54.1094 125.082 53.2031 124.797 52.0156 124.789H48.5703V131.258ZM70.5312 135.547H63.3828L61.7773 140H59.457L65.9727 122.938H67.9414L74.4688 140H72.1602L70.5312 135.547ZM64.0625 133.695H69.8633L66.957 125.715L64.0625 133.695ZM89.1758 134.586C88.9648 136.391 88.2969 137.785 87.1719 138.77C86.0547 139.746 84.5664 140.234 82.707 140.234C80.6914 140.234 79.0742 139.512 77.8555 138.066C76.6445 136.621 76.0391 134.688 76.0391 132.266V130.625C76.0391 129.039 76.3203 127.645 76.8828 126.441C77.4531 125.238 78.2578 124.316 79.2969 123.676C80.3359 123.027 81.5391 122.703 82.9062 122.703C84.7188 122.703 86.1719 123.211 87.2656 124.227C88.3594 125.234 88.9961 126.633 89.1758 128.422H86.9141C86.7188 127.062 86.293 126.078 85.6367 125.469C84.9883 124.859 84.0781 124.555 82.9062 124.555C81.4688 124.555 80.3398 125.086 79.5195 126.148C78.707 127.211 78.3008 128.723 78.3008 130.684V132.336C78.3008 134.188 78.6875 135.66 79.4609 136.754C80.2344 137.848 81.3164 138.395 82.707 138.395C83.957 138.395 84.9141 138.113 85.5781 137.551C86.25 136.98 86.6953 135.992 86.9141 134.586H89.1758ZM96.5938 132.066L94.5078 134.234V140H92.2578V122.938H94.5078V131.375L102.09 122.938H104.809L98.0938 130.473L105.336 140H102.641L96.5938 132.066ZM116.727 135.547H109.578L107.973 140H105.652L112.168 122.938H114.137L120.664 140H118.355L116.727 135.547ZM110.258 133.695H116.059L113.152 125.715L110.258 133.695Z"
                fill="white"
              />
            </svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;