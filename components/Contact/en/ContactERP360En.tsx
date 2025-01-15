import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Divider, Flex, Heading, Text, FormControl, useColorModeValue, Image as NovaImage, useColorMode, FormLabel, Input } from '@chakra-ui/react';
import { en, es } from "@/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";

export const ContactERP360En = () => {
    const { colorMode } = useColorMode()
    const bgInput = useColorModeValue("blur-contact", "blur-dark");
    const manosRobot = useColorModeValue("/images/manosrobot2.webp", "/images/manosrobot2.webp");
    const { locale, pathname } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { contact: { heading: { text01, text02 }, form: { name, companytipe, email, lastName, Date1, phone, message } } } } = t;
    const [selectedSector, setSelectedSector] = useState<string>('');
    //Varaiables de sectores
    const sectors = ["Health", "Beauty", "Technology", "Education", "Finance", "Manufacturing", "Retail", "Transportation", "Food"];
    //manejo de chack box de sectores
    const handleCheckboxChange = (sector: string) => {
        setSelectedSector(sector);
    };
    //variables de calendario 
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleDateChange = (date: Date | null) => {
        if (date && date > new Date()) {
            setSelectedDate(date);
        } else {
            alert("Please select a future date.");
        }
    };

    //validar fecha 
    return (
        <Box as='section' position="relative" zIndex="5" overflow="hidden" id="vinculoContact">
            <Box w="95%" m="0 auto" position="relative" zIndex="5">
                <Box maxW="1200px" m="0 auto" lineHeight={1.2}>
                    <Box ml={{ md: "15px" }}>
                        <Heading
                            as='p'
                            textAlign="center"
                            fontSize={{ base: "24px", md: "32px" }}
                        >
                            {text01}
                        </Heading>
                    </Box>

                    <Flex
                        m={{ base: "20px", md: "40px 0 0 10px" }}
                        direction={{ base: "column", md: "row" }}
                        alignItems="center"
                        justifyContent="center"
                        gap={5}
                    >
                        <Box>
                            <Heading
                                as="h2"
                                color={useColorModeValue('green.400', 'white.100')}
                                textAlign="center"
                                fontSize={{ base: "36px", md: "32px" }}
                            >
                                {text02}
                            </Heading>

                            <Divider m={{ base: "15px auto 30px", md: "15px auto 0px" }} w="120px" h="5px" bgColor={colorMode === 'light' ? "odoo.400" : '#fff'} opacity={colorMode === 'dark' ? "0.7" : 0.9} borderRadius='10px' />
                        </Box>
                        {/* <NovaImage loading='lazy' h='110px' src='/images/nova.webp' alt='nova' className="nova" /> */}
                    </Flex>
                </Box>
                {/* Heading */}

                <Box
                    position="relative"
                    zIndex="5"
                    bgPosition="center"
                    bgSize="cover"
                    maxW="600px"
                    maxH="300px"
                    m="20px auto 80px"
                    w="95%"
                    h={{ base: "400px", md: "450px" }}
                >
                    <FormControl
                        className={colorMode === 'light' ? bgInput : ''}
                        p={{ base: "40px 20px", md: "50px" }}
                        fontFamily="'Exo 2'"
                        bgColor="#f4fbfc20"
                        borderRadius="20px"
                    >


                        <div id="mauticform_wrapper_formerp360nuevoes" className="mauticform_wrapper">
                            <form autoComplete="false" role="form" method="post" action="https://info.estelio.com/form/submit?formId=58" id="mauticform_formerp360nuevoes" data-mautic-form="formerp360nuevoes" encType="multipart/form-data" >
                                <div className="mauticform-error" id="mauticform_formerp360nuevoes_error"></div>
                                <div className="mauticform-message" id="mauticform_formerp360nuevoes_message"></div>
                                <div className="mauticform-innerform">

                                    <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

                                        <div id="mauticform_formerp360es_nombre" data-validate="nombre" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required form-inputs-content">
                                            <label id="mauticform_label_formerp360es_nombre" htmlFor="mauticform_input_formerp360es_nombre" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label label-required">{name}</label>
                                            <input id="mauticform_input_formerp360es_nombre" name="mauticform[nombre]" className="mauticform-input form-inputs" type="text" required />
                                        </div>


                                        <div id="mauticform_formerp360es_corre_electronico" data-validate="corre_electronico" data-validation-type="email" className="mauticform-row mauticform-email mauticform-field-3 mauticform-required form-inputs-content">
                                            <label id="mauticform_label_formerp360es_corre_electronico" htmlFor="mauticform_input_formerp360es_corre_electronico" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label label-required">{email}</label>
                                            <input id="mauticform_input_formerp360es_corre_electronico" name="mauticform[corre_electronico]" className="mauticform-input form-inputs" type="email" required />
                                        </div>

                                        <div id="mauticform_formerp360en_companytipe" data-validate="companytipe" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-2 mauticform-required form-inputs-content">
                                            {/*OTRO ESTILO PARA COMPANY <FormLabel color={colorMode === 'light' ? "#23BBB3" : "#FCF7F2"} className="mauticform-label label-required">{companytipe}</FormLabel> */}
                                            <label id="mauticform_input_formerp360en_companytipe" htmlFor="mauticform_input_formerp360en_companytipe" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label label-required">{companytipe}</label>
                                            {/* SECTORES DE INDUSTRIA */}
                                            <input id="mauticform_input_formerp360en_companytipe" name="mauticform[companytipe]" style={{ color: colorMode === 'light' ? "#444444" : "#444444" }} className="mauticform-input form-inputs" type="text" value={selectedSector} readOnly required />
                                            <Box display="grid" gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4} mt={4} style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} >
                                                {sectors.map((sector, index) => (
                                                    <Box key={index} display="flex" alignItems="center">
                                                        <input
                                                            type="checkbox"
                                                            id={`sector-${index}`}
                                                            name="mauticform[sector]"
                                                            value={sector}
                                                            checked={selectedSector === sector}
                                                            onChange={() => handleCheckboxChange(sector)}
                                                        />
                                                        <label htmlFor={`sector-${index}`} style={{ marginLeft: '8px' }}>{sector}</label>
                                                    </Box>
                                                ))}
                                            </Box>
                                            {/* Fecha */}
                                        </div>
                                        <div id="mauticform_formerp360en_date" data-validate="date" data-validation-type="date" className="mauticform-row mauticform-tel mauticform-field-4 mauticform-required form-inputs-content">
                                            <label id="mauticform_label_formerp360en_date" htmlFor="mauticform_input_formerp360en_date" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label label-required">{Date1}</label>
                                            <input
                                                type="date"
                                                autoComplete="false"
                                                id="mauticform_input_formerp360en_date"
                                                name="mauticform[date]"
                                                style={{ color: colorMode === 'light' ? "#23BBB3" : "#444444" }}
                                                className="mauticform-input form-inputs"
                                                required
                                                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                                                onChange={(e) => {
                                                    const selectedDate = new Date(e.target.value);
                                                    const currentDate = new Date();
                                                    if (selectedDate >= currentDate) {
                                                        setSelectedDate(selectedDate);
                                                    } else {
                                                        alert("Seleccione una fecha que sea hoy o en el futuro.");
                                                        setSelectedDate(null);
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div id="mauticform_formerp360nuevoes_telefono" className="mauticform-row mauticform-tel mauticform-field-5 mauticform-required">
                                            <label id="mauticform_label_formerp360nuevoes_telefono" htmlFor="mauticform_input_formerp360nuevoes_telefono" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label">{phone}</label>
                                            <input id="mauticform_input_formerp360nuevoes_telefono" name="mauticform[telefono]" className="mauticform-input" type="tel" />
                                        </div>
                                        {/* 
                                        <div  id="mauticform_formerp360es_mensaje" className="mauticform-row mauticform-text mauticform-field-5 form-inputs-content">
                                            <label id="mauticform_label_formerp360es_mensaje" htmlFor="mauticform_input_formerp360es_mensaje" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label label-required">{message}</label>
                                            <textarea id="mauticform_input_formerp360es_mensaje" name="mauticform[mensaje]" className="mauticform-textarea textArea-form"></textarea>
                                        </div>    */}

                                        <div id="mauticform_formerp360nuevoes_mensaje" className="mauticform-row mauticform-text mauticform-field-6">
                                            <label id="mauticform_label_formerp360nuevoes_mensaje" htmlFor="mauticform_input_formerp360nuevoes_mensaje" style={{ color: colorMode === 'light' ? "#23BBB3" : "#FCF7F2" }} className="mauticform-label">{message}</label>
                                            <textarea id="mauticform_input_formerp360nuevoes_mensaje" name="mauticform[mensaje]" className="mauticform-textarea"></textarea>
                                            <span className="mauticform-errormsg"  ></span>
                                        </div>


                                        <div id="mauticform_formerp360nuevoes_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-7 form-button-content">
                                            <button type="submit" name="mauticform[submit]" id="mauticform_input_formerp360nuevoes_submit" className="mauticform-button form-button">{buttons.button}</button>
                                        </div>
                                    </div>
                                </div>

                                <input type="hidden" name="mauticform[formId]" id="mauticform_formerp360nuevoes_id" value="58" />
                                <input type="hidden" name="mauticform[return]" id="mauticform_formerp360nuevoes_return" value="" />
                                <input type="hidden" name="mauticform[formName]" id="mauticform_formerp360nuevoes_name" value="formerp360nuevoes" />

                            </form>

                        </div>


                    </FormControl>
                </Box>
            </Box>
            <Box position="relative" zIndex="1" mt={{ base: "25rem", lg: "21rem", xl: "18rem" }} mb="-10px">
                <Image src={manosRobot} width={1920} height={1080} alt="Robot Hands" />
            </Box>
        </Box>
    )
}
