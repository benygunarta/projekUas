import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Mahasiswa from './Mahasiswa.js';
import AboutMe from './AboutMe.js';
import MenuUtama from './MenuUtama.js';
import Kelas from './Kelas.js';
import Navigasi from "./Navigasi.js";
import Foto from "./Foto.js";


	const AppNavigator = createDrawerNavigator(
	{
		MenuUtama: MenuUtama,
		Mahasiswa: Mahasiswa,
		AboutMe: AboutMe,
		Kelas : Kelas,
		Navigasi : Navigasi,
		Foto : Foto,
		
	},
	{
		initialRouteName: "MenuUtama"
	}
	);
export default createAppContainer(AppNavigator);