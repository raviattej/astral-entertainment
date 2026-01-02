import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative p-8 rounded-xl bg-gradient-card border border-border hover:border-gold/50 transition-all duration-300 shadow-card hover:shadow-elevated",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-gold" />
        </div>

        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
