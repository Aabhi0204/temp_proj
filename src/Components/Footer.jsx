

import React from 'react';
import { TERipple } from "tw-elements-react";

export default function FooterButtonsDarkExample() {
    return (
       <footer class="bg-gray-900 text-white py-10">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
   
    <div class="flex items-center space-x-2 mb-6 md:mb-0">
      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
      
        <span class="text-white text-lg font-bold">P</span>
      </div>
      <span class="text-xl font-semibold">Pagedone</span>
    </div>

 
    <nav class="flex space-x-6 text-gray-300 text-sm mb-6 md:mb-0">
      <a href="#" class="hover:text-white">Pagedone</a>
      <a href="#" class="hover:text-white">Products</a>
      <a href="#" class="hover:text-white">Resources</a>
      <a href="#" class="hover:text-white">Blog</a>
      <a href="#" class="hover:text-white">Support</a>
    </nav>

   
    <div class="flex space-x-4">
     
      {/* Facebook */}
      <a href="https://facebook.com" class="bg-blue-600 p-2 rounded-full hover:bg-blue-500" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/>
        </svg>
      </a>
      {/* Twitter */}
      <a href="https://twitter.com" class="bg-blue-400 p-2 rounded-full hover:bg-blue-300" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href="https://instagram.com" class="bg-pink-500 p-2 rounded-full hover:bg-pink-400" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a href="https://linkedin.com" class="bg-blue-700 p-2 rounded-full hover:bg-blue-600" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.604v5.592z"/>
        </svg>
      </a>
    </div>
  </div>

 
  <div class="border-t border-gray-800 mt-8"></div>

  <div class="text-center text-gray-500 text-sm mt-4">
    ©pagedone 2023, All rights reserved.
  </div>
</footer>

    );
}
