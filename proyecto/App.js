
import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();


function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Lista usuarios">
      <HomeStack.Screen name="Lista usuarios" component={Musicos} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />
      <HomeStack.Screen name="Filtro" component={FiltroPantalla} options={{ headerStyle: { backgroundColor: 'red' } }} />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#AEE368',
          tabBarInactiveTintColor: '#AEE368',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaScreen} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />
        <Tab.Screen name="Musicos" component={Home} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({

  textos: {

    backgroundColor: "white",

    textAlign: "left",

    padding: 10,

    paddingLeft: 15,

    paddingRight: 15

  },

  view: {

    flex: 1,

    alignItems: "center",

    backgroundColor: "white",

    justifyContent: "center"



  },

  touchable: {

    alignItems: "center",

    backgroundColor: "white",

    padding: 20

  },

  header: {

    backgroundColor: "#B3DF78",

  },

  image: {

    height: 150,

    width: 150,

    padding: 10

  },

  textinput: {
    height: 50,
    width: 140,
    marginRight: 30,
    marginTop: 10,
    padding: 15,
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },

  musicos: {
    marginRight: 10,
    padding: 10,
    textAlign: 'center'

  }



});



function HistoriaScreen() {
  return (
    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.textos}>Bienvenido a la historia de los dispositivos moviles</Text>
        <Text style={styles.textos}>Esto se trata de una BlackBerry</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/BB.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  19 de enero de 1999 </Text>
        <Text style={styles.textos}> Historia:  El primer dispositivo de la familia fue la BlackBerry 850, el dispositivo móvil tenía un teclado completo, lo que era inusual en ese momento.
          Podía enviar mensajes, acceder al correo electrónico, enviar y recibir páginas de internet completas e implementaba una agenda para organizar tareas, con tan solo una pequeña
          pantalla que podía mostrar ocho líneas de texto.En cierta manera era más parecido a un Mensáfono que a un teléfono inteligente.
          Se puso a la venta por primera vez en 1999 en la ciudad de Múnich, Alemania.</Text>
        <Text style={styles.textos}>  Conclusión: Primero: Decidan cuales son las funciones básicas que requieren en sus Smartphones. Según esto, bajen la app que necesiten y descarten cualquier otra.

          Segundo: Si notan que no usan alguna aplicación, bórrenla. Es muy divertido probar aplicaciones, pero esto consume batería, procesador, memoria y hasta nuestro tiempo. Si quieren jugar con su smartphone, háganlo en su casa con el cargador al costado y usando wifi.

          Tercero: Si se quieren distraer, háganlo usando archivos de música local en el teléfono. Prohibido los videos de Youtube si están en la calle o lejos de un cargador.

          Cuarto: Mientras estén lejos de un cargador, desactiven todo menos la función de teléfono y los datos si es que lo necesitan. Bluetooth, Wifi deben estar apagados si es que no se utilizan.

          Quinto:  Nunca está demás tener una batería de respaldo. Un complemento es que usemos el cargador siempre que podamos.</Text>

        <Text style={styles.textos}>Esto se trata de un Nokia C6</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/nokiac6.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  13 de enero de 2010 </Text>
        <Text style={styles.textos}> Historia:  La empresa Nokia fue creada en 1865, cuando Finlandia era parte del Imperio ruso,
          a iniciativa del ingeniero Fredrik Idestam con ayuda de su esposa, quienes establecieron una fábrica de pulpa de madera para
          la producción de papel a orillas de los rápidos de Tammerkoski, en el sur del país. Unos años más tarde, construyó una segunda
          fábrica por el río Nokianvirta, el lugar que dio su nombre de Nokia. La compañía tuvo un gran despunte debido a la ola de industrialización
          imperante en toda Europa, misma que elevó el consumo de papel y cartón. Alrededor de la fábrica se establecieron asentamientos humanos, y a esa
          comunidad también se le denominaría Nokia.Fue tal la prosperidad de la empresa que Idestam muy pronto estableció una red de ventas y los productos de
          Nokia fueron exportados en primer lugar al Imperio ruso y más tarde al Reino Unido y Francia.Nokia experimentó una expansión horizontal generada debido a múltiples
          circunstancias. En 1898, una fábrica finlandesa de caucho empezó a manufacturar zapatos. Esta empresa se convirtió en vecina de Nokia cuando dos de los ejecutivos de la
          industria del caucho decidieron establecerse cerca de la fábrica de cartón por considerar que la disponibilidad de energía hidroeléctrica en la zona era muy amplia.
          Hacia la década de 1920, los fabricantes de caucho empezaron a utilizar el nombre Nokia como marca. Además de fabricar calzado y neumáticos para automóviles,
          la compañía comenzó a producir también partes industriales derivadas del caucho, gabardinas, alfombras, pelotas y juguetes.</Text>
        <Text style={styles.textos}>  Conclusión: No es el mejor móvil del mercado pero posiblemente sea uno de los móviles más completos
          que podemos encontrar por su precio y con teclado físico. Lástima de esa pantalla resistiva.En realidad Nokia C6 sólo necesita un Sistema Operativo más amigable
          con el usuario y actualizado para tener ese plus que cautiva al posible comprador.Resumiendo, un móvil difícil de clasificar con una cámara mediocre,
          una buena reproducción de audio y un teclado físico que permite un uso agresivo de las aplicaciones de mensajes y mails. Se sitúa lejos de los Smartphones más
          ambiciosos pero por debajo de teléfonos de precios similares como el HTC Wildfire aunque este no tiene teclado físico-.</Text>



        <Text style={styles.textos}>Esto se trata de un Nokia C6</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/alcatel.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  13 de enero de 2010 </Text>
        <Text style={styles.textos}> Historia: Con su sede en París, calle la Boétie, con instalaciones importantes dentro y fuera de la ciudad,
          Alcatel tiene una larga historia comenzando en 1898 con la fundación de la Compagnie Générale d'Electricité (CGE). La sede original de la empresa estaba
          en la región de Alsacia (de hecho, el nombre "Alcatel" proviene de una pequeña empresa telefónica llamada "Alsacienne de Cables et de Telephones") y aún
          mantiene instalaciones de investigación y desarrollo en el área de Estrasburgo. Hubo un número de fusiones y adquisiciones, y también de desinversiones desde 1898.
          Para entender la compañía actual y su enfoque hacia las telecomunicaciones, lo más importante fue la adquisición de las actividades en el ámbito de las telecomunicaciones
          europeas de ITT en 1986. Las compañías unidas se pasaron a llamar Alcatel Alsthom. Alcatel mantiene un papel importante en el I+D en Francia
          (Región de París, Bretaña, Sur de Francia), Amberes (Bélgica) -en las operaciones que Bell Telephone desarrollaba allí-, en Stuttgart (Alemania) y, desde 2000
          en Shanghái (China). Desde 1990, vino adquiriendo varias compañías norteamericanas: Rockwell Technologies, DSC, Xylan,
          Packet Engines, Assured Access, Newbridge, iMagicTV, TiMetra, eDial. Esto le dio a Alcatel una presencia importante tanto en los EE. UU. como en Canadá.
          Alcatel tiene su sede norteamericana en Plano, y centros de I+D en Ottawa, Mountain View, Petaluma, Saint John, Calabasas, y Raleigh.
          En diciembre 1 de 2006, Alcatel completó su fusión con otro gigante de las telecomunicaciones: Lucent Technologies.</Text>
        <Text style={styles.textos}>  Conclusión:Para plantearse comprar el Alcatel 1S (2020) antes hay que buscar dos cosas, un móvil sencillo al que recurrir muy de vez en
          cuando y gastarse poco dinero. Este móvil de gama de entrada, como todos, cuenta con sus puntos fuertes y débiles, que le hacen ser ideal para un público muy específico.
          Si lo importante para ti es contar con una buena autonomía para olvidarte un par de días del cargador, no sueles ver muchos vídeos ni juegas a los videojuegos con el móvil y
          lo que quieres es un terminal fácil de usar, el Alcatel 1S podría ser una buena opción.  </Text>


      </View>
    </ScrollView>


  );


}



function Musicos(navigation, route) {

  const [instrumento, onChangeText] = React.useState(null);
  return (


    <View >

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textos}>Instrumento</Text>
        <TextInput style={styles.textinput}
          onChangeText={onChangeText}
          value={instrumento}
          keyboardType="default"
        />
      </View>

      <Button
        title='Buscar'
        onPress={() => navigation.navigate("filtro", { instrumento: instrumento })}
      />


      <FlatList
        data={users}
        renderItem={Enseñar}
        kayExtractor={item => item.id} />

    </View>
  )
}



function Enseñar({ item }) {

  return <View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
      <Image style={{ height: 50, width: 50, marginLeft: 20, alignItems: 'center', padding: 10 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/57/57117.png' }} />
      <Text style={{ textAlign: 'center' }}>{item.nombre}</Text>
      <Text style={{ marginTop: 5 }}>{item.instrumento}</Text>
    </View>

    <View>

      <Text>{item.nombre}</Text>

      <Text style={{ color: 'Black' }}>{item.instrumento}</Text>



    </View>


    <View
      style={{
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        padding: 10
      }}
    />

  </View>

}



const users = [
  { id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' },

  { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' },

  { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' },

  { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' },

  { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' },

  { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' },

  { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' },

  { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' },

  { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' },

  { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' },

  { id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' },

  { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' },

  { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' }]



function FiltroPantalla(navigation, route) {

  function filtro(item) {
    if (item.instrumento == route.params.instrumento) {
      return <View>
        <Text>{item.nombre}</Text>
        <Text>{item.edad}</Text>
        <Text>{item.instrumento}</Text>

      </View>
    }
  }
  return (

    <View>
      <FlatList
        data={users}
        renderItem={filtro}
        kayExtractor={item => item.id} />

    </View>
  );


}




