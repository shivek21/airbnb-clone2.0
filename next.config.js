/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['links.papareact.com'],
  },
  env:{
    mapbox_key:'pk.eyJ1Ijoic2hpdmVrMjEiLCJhIjoiY2wzdnJ1Nm5iMDc4djNjbHp2NGx2cmFrbCJ9.05O6G9GwwIPkXyFlDQIgeQ',
  }
}

module.exports = nextConfig
