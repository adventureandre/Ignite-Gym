#!/bin/bash

# Caminho para o executável do emulador Android
emulator_path=/home/andre/Android/Sdk/emulator/emulator

# Opções para iniciar o emulador (substitua com as suas configurações)
emulator_options="-avd ADV-Emulation -gpu host -no-snapshot"

# Iniciar o emulador
$emulator_path $emulator_options &