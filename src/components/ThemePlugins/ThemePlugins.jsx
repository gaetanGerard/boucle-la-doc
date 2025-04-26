import styles from './ThemePlugins.module.scss';
import PluginCards from '@/components/PluginCards/PluginCards';
import Title from '@/components/ui/Title/Title';

const ThemePlugins = ({ plugins }) => {
  return (
    <section className={styles.plugins}>
      <Title level={2} className="section_title">Plugins intégrés et optimisés</Title>
      <PluginCards plugins={plugins.list} />
    </section>
  );
};

export default ThemePlugins;
