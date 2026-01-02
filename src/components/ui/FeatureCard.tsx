import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-5"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-gold" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
